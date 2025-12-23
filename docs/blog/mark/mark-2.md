---
title: 云台
permalink: /mark/mark-2/
---

这是对双轴云台控制任务代码的复盘。

### · BMI088

这部分没有做过多改动

### · PID

`pid.h`：

```c
#ifndef __PID_H
#define __PID_H

#include "main.h"

typedef struct {
	
	float Target;
	float Actual;
	float Out;
	float Kp;
	float Ki;
	float Kd;
	float Error0;
	float Error1;
	float ErrorInt;
	float OutMax;
	float OutMin;
	float OutOffset;

} PID_t;


void pid_update(PID_t *p,float err);

#endif

```

`pid.c`：

```C
#include "pid.h"

void pid_update(PID_t *p,float err)
{
	p->Error0 = p->Error1;
	p->Error1 = err;
	
	if(p->Ki != 0)p->ErrorInt += p->Error1;
	if(p->Ki == 0)p->ErrorInt =0;
	
	if(p->ErrorInt >= p->OutMax/p->Ki) p->ErrorInt = p->OutMax/p->Ki;
	if(p->ErrorInt <= p->OutMin/p->Ki) p->ErrorInt = p->OutMin/p->Ki;
	
	p->Out = p->Kp * p->Error1 + p->Ki *p->ErrorInt + p->Kd * (p->Error1 - p->Error0);
	
	if(p->Out >0) p->Out += p->OutOffset;
	else if(p->Out <0)p->Out -= p->OutOffset;
	
	if(p->Out >= p->OutMax) p->Out = p->OutMax;
	else if(p->Out <= p->OutMin) p->Out = p->OutMin;
	
}
```

### · 四元数

`Quaternion.h`：

```C
#ifndef __QUATERNION_H
#define __QUATERNION_H

#include "main.h"
#include "pid.h"

extern float q_curr[4];
extern float q_des[4];


void attitude_control(PID_t *chassis, PID_t *gimbal);


#endif

```

`Quaternion.c`：

```c
#include "Quaternion.h"

float q_curr[4] = {1.0f, 0.0f, 0.0f, 0.0f};  // 当前姿态四元数（初始无旋转）
float q_des[4] = {1.0f, 0.0f, 0.0f, 0.0f};   // 目标姿态四元数


static void quat_conjugate(const float q[4], float q_conj[4]) {
    q_conj[0] = q[0];
    q_conj[1] = -q[1];
    q_conj[2] = -q[2];
    q_conj[3] = -q[3];
}



static void quat_multiply(const float q1[4], const float q2[4], float q3[4]) {
    q3[4] = q1[0]*q2[0] - q1[1]*q2[1] - q1[2]*q2[2] - q1[3]*q2[3];
    q3[1] = q1[0]*q2[1] + q1[1]*q2[0] + q1[2]*q2[3] - q1[3]*q2[2];
    q3[2] = q1[0]*q2[2] - q1[1]*q2[3] + q1[2]*q2[0] + q1[3]*q2[1];
    q3[3] = q1[0]*q2[3] + q1[1]*q2[2] - q1[2]*q2[1] + q1[3]*q2[0];
}

// 4. 姿态控制核心函数：计算目标与当前姿态偏差，输出电机指令
void attitude_control(PID_t *Chassis_Speed_Pid, PID_t *Gimbal_Speed_Pid) {
    float q_err[4], q_curr_conj[4];
    float err[3];
    float dt = 1.0f / 1000;  // 控制周期（1ms）

    // 步骤1：计算当前姿态四元数的共轭
    quat_conjugate(q_curr, q_curr_conj);

    // 步骤2：计算姿态偏差四元数 q_err = q_des * q_curr_conj
    // 物理意义：从当前姿态旋转到目标姿态的四元数
    quat_multiply(q_des, q_curr_conj, q_err);

    // 步骤3：偏差四元数转误差向量（虚部与姿态偏差角成正比，小角度近似线性）
    err[0] = q_err[1];  // 横滚轴偏差
    err[1] = q_err[2];  // 俯仰轴偏差
    err[2] = q_err[3];  // 偏航轴偏差

	
	pid_update(Chassis_Speed_Pid,err[2]);
	pid_update(Gimbal_Speed_Pid,err[1]);
	
	
    
}

```

### · 姿态解算

`MahonyAHRS.h`：

```c
#ifndef MahonyAHRS_h
#define MahonyAHRS_h

#include "main.h"

//----------------------------------------------------------------------------------------------------
// Variable declaration

extern volatile float twoKp;			// 2 * proportional gain (Kp)
extern volatile float twoKi;			// 2 * integral gain (Ki)
//extern volatile float q0, q1, q2, q3;	// quaternion of sensor frame relative to auxiliary frame

//---------------------------------------------------------------------------------------------------
// Function declarations

void MahonyAHRSupdate(float q[4],float gx, float gy, float gz, float ax, float ay, float az, float mx, float my, float mz);
void MahonyAHRSupdateIMU(float q[4],float gx, float gy, float gz, float ax, float ay, float az) ;
void get_angle(float q[4], float *yaw, float *pitch, float *roll);

#endif
```

`MahonyAHRS.c`：

```c
#include "MahonyAHRS.h"
#include <math.h>
//---------------------------------------------------------------------------------------------------
// Definitions

#define sampleFreq	1000.0f			// sample frequency in Hz
#define twoKpDef	(2.0f * 0.5f)	// 2 * proportional gain
#define twoKiDef	(2.0f * 0.0f)	// 2 * integral gain

//---------------------------------------------------------------------------------------------------
// Variable definitions

volatile float twoKp = twoKpDef;											// 2 * proportional gain (Kp)
volatile float twoKi = twoKiDef;											// 2 * integral gain (Ki)
//volatile float q0 = 1.0f, q1 = 0.0f, q2 = 0.0f, q3 = 0.0f;					// quaternion of sensor frame relative to auxiliary frame
volatile float integralFBx = 0.0f,  integralFBy = 0.0f, integralFBz = 0.0f;	// integral error terms scaled by Ki


//---------------------------------------------------------------------------------------------------
// Function declarations

float invSqrt(float x);

//====================================================================================================
// Functions

//---------------------------------------------------------------------------------------------------
// AHRS algorithm update

void MahonyAHRSupdate(float q[4],float gx, float gy, float gz, float ax, float ay, float az, float mx, float my, float mz) {
	float recipNorm;
    float q0q0, q0q1, q0q2, q0q3, q1q1, q1q2, q1q3, q2q2, q2q3, q3q3;  
	float hx, hy, bx, bz;
	float halfvx, halfvy, halfvz, halfwx, halfwy, halfwz;
	float halfex, halfey, halfez;
	float qa, qb, qc;

	// Use IMU algorithm if magnetometer measurement invalid (avoids NaN in magnetometer normalisation)
	if((mx == 0.0f) && (my == 0.0f) && (mz == 0.0f)) {
		MahonyAHRSupdateIMU(q,gx, gy, gz, ax, ay, az);
		return;
	}

	// Compute feedback only if accelerometer measurement valid (avoids NaN in accelerometer normalisation)
	if(!((ax == 0.0f) && (ay == 0.0f) && (az == 0.0f))) {

		// Normalise accelerometer measurement
		recipNorm = invSqrt(ax * ax + ay * ay + az * az);
		ax *= recipNorm;
		ay *= recipNorm;
		az *= recipNorm;     

		// Normalise magnetometer measurement
		recipNorm = invSqrt(mx * mx + my * my + mz * mz);
		mx *= recipNorm;
		my *= recipNorm;
		mz *= recipNorm;   

        // Auxiliary variables to avoid repeated arithmetic
        q0q0 = q[0] * q[0];
        q0q1 = q[0] * q[1];
        q0q2 = q[0] * q[2];
        q0q3 = q[0] * q[3];
        q1q1 = q[1] * q[1];
        q1q2 = q[1] * q[2];
        q1q3 = q[1] * q[3];
        q2q2 = q[2] * q[2];
        q2q3 = q[2] * q[3];
        q3q3 = q[3] * q[3];   

        // Reference direction of Earth's magnetic field
        hx = 2.0f * (mx * (0.5f - q2q2 - q3q3) + my * (q1q2 - q0q3) + mz * (q1q3 + q0q2));
        hy = 2.0f * (mx * (q1q2 + q0q3) + my * (0.5f - q1q1 - q3q3) + mz * (q2q3 - q0q1));
        bx = sqrt(hx * hx + hy * hy);
        bz = 2.0f * (mx * (q1q3 - q0q2) + my * (q2q3 + q0q1) + mz * (0.5f - q1q1 - q2q2));

		// Estimated direction of gravity and magnetic field
		halfvx = q1q3 - q0q2;
		halfvy = q0q1 + q2q3;
		halfvz = q0q0 - 0.5f + q3q3;
        halfwx = bx * (0.5f - q2q2 - q3q3) + bz * (q1q3 - q0q2);
        halfwy = bx * (q1q2 - q0q3) + bz * (q0q1 + q2q3);
        halfwz = bx * (q0q2 + q1q3) + bz * (0.5f - q1q1 - q2q2);  
	
		// Error is sum of cross product between estimated direction and measured direction of field vectors
		halfex = (ay * halfvz - az * halfvy) + (my * halfwz - mz * halfwy);
		halfey = (az * halfvx - ax * halfvz) + (mz * halfwx - mx * halfwz);
		halfez = (ax * halfvy - ay * halfvx) + (mx * halfwy - my * halfwx);

		// Compute and apply integral feedback if enabled
		if(twoKi > 0.0f) {
			integralFBx += twoKi * halfex * (1.0f / sampleFreq);	// integral error scaled by Ki
			integralFBy += twoKi * halfey * (1.0f / sampleFreq);
			integralFBz += twoKi * halfez * (1.0f / sampleFreq);
			gx += integralFBx;	// apply integral feedback
			gy += integralFBy;
			gz += integralFBz;
		}
		else {
			integralFBx = 0.0f;	// prevent integral windup
			integralFBy = 0.0f;
			integralFBz = 0.0f;
		}

		// Apply proportional feedback
		gx += twoKp * halfex;
		gy += twoKp * halfey;
		gz += twoKp * halfez;
	}
	
	// Integrate rate of change of quaternion
	gx *= (0.5f * (1.0f / sampleFreq));		// pre-multiply common factors
	gy *= (0.5f * (1.0f / sampleFreq));
	gz *= (0.5f * (1.0f / sampleFreq));
	qa = q[0];
	qb = q[1];
	qc = q[2];
	q[0] += (-qb * gx - qc * gy - q[3] * gz);
	q[1] += (qa * gx + qc * gz - q[3] * gy);
	q[2] += (qa * gy - qb * gz + q[3] * gx);
	q[3] += (qa * gz + qb * gy - qc * gx); 
	
	// Normalise quaternion
	recipNorm = invSqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
	q[0] *= recipNorm;
	q[1] *= recipNorm;
	q[2] *= recipNorm;
	q[3] *= recipNorm;
}

//---------------------------------------------------------------------------------------------------
// IMU algorithm update

void MahonyAHRSupdateIMU(float q[4],float gx, float gy, float gz, float ax, float ay, float az) {
	float recipNorm;
	float halfvx, halfvy, halfvz;
	float halfex, halfey, halfez;
	float qa, qb, qc;

	// Compute feedback only if accelerometer measurement valid (avoids NaN in accelerometer normalisation)
	if(!((ax == 0.0f) && (ay == 0.0f) && (az == 0.0f))) {

		// Normalise accelerometer measurement
		recipNorm = invSqrt(ax * ax + ay * ay + az * az);
		ax *= recipNorm;
		ay *= recipNorm;
		az *= recipNorm;        

		// Estimated direction of gravity and vector perpendicular to magnetic flux
		halfvx = q[1] * q[3] - q[0] * q[2];
		halfvy = q[0] * q[1] + q[2] * q[3];
		halfvz = q[0] * q[0] - 0.5f + q[3] * q[3];
	
		// Error is sum of cross product between estimated and measured direction of gravity
		halfex = (ay * halfvz - az * halfvy);
		halfey = (az * halfvx - ax * halfvz);
		halfez = (ax * halfvy - ay * halfvx);

		// Compute and apply integral feedback if enabled
		if(twoKi > 0.0f) {
			integralFBx += twoKi * halfex * (1.0f / sampleFreq);	// integral error scaled by Ki
			integralFBy += twoKi * halfey * (1.0f / sampleFreq);
			integralFBz += twoKi * halfez * (1.0f / sampleFreq);
			gx += integralFBx;	// apply integral feedback
			gy += integralFBy;
			gz += integralFBz;
		}
		else {
			integralFBx = 0.0f;	// prevent integral windup
			integralFBy = 0.0f;
			integralFBz = 0.0f;
		}

		// Apply proportional feedback
		gx += twoKp * halfex;
		gy += twoKp * halfey;
		gz += twoKp * halfez;
	}
	
	// Integrate rate of change of quaternion
	gx *= (0.5f * (1.0f / sampleFreq));		// pre-multiply common factors
	gy *= (0.5f * (1.0f / sampleFreq));
	gz *= (0.5f * (1.0f / sampleFreq));
	qa = q[0];
	qb = q[1];
	qc = q[2];
	q[0] += (-qb * gx - qc * gy - q[3] * gz);
	q[1] += (qa * gx + qc * gz - q[3] * gy);
	q[2] += (qa * gy - qb * gz + q[3] * gx);
	q[3] += (qa * gz + qb * gy - qc * gx); 
	
	// Normalise quaternion
	recipNorm = invSqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
	q[0] *= recipNorm;
	q[1] *= recipNorm;
	q[2] *= recipNorm;
	q[3] *= recipNorm;
}

//---------------------------------------------------------------------------------------------------
// Fast inverse square-root
// See: http://en.wikipedia.org/wiki/Fast_inverse_square_root

float invSqrt(float x) {
	float halfx = 0.5f * x;
	float y = x;
	long i = *(long*)&y;
	i = 0x5f3759df - (i>>1);
	y = *(float*)&i;
	y = y * (1.5f - (halfx * y * y));
	return y;
}
```

### · main.c

```c
/* USER CODE BEGIN PD */
//extern int16_t chassis_speed,chassis_angle, chassis_last_angle;
//extern int16_t gimbal_speed,gimbal_angle,gimbal_last_angle;

//extern motor_t chassis, gimbal;

fp32 gyro[3], accel[3], temp;
//float q[4]={1,0,0,0};
//float yaw, pitch, roll;

PID_t Chassis_Speed_Pid, Chassis_Angle_Pid, Gimbal_Speed_Pid, Gimbal_Angle_Pid;

uint16_t TIM_IT_test;
int16_t chassis_speed_test;
/* USER CODE END PD */

  /* USER CODE BEGIN 2 */
  can_filter_init();
	HAL_TIM_Base_Start_IT(&htim1);

	while(BMI088_init()){;}
	
//	__HAL_TIM_ENABLE_IT(&htim1, TIM_IT_UPDATE);

	Chassis_Speed_Pid.Kp = 16000;
	Chassis_Speed_Pid.Ki = 5;
	Chassis_Speed_Pid.Kd = 0;
	Chassis_Speed_Pid.OutMax = 8400;
	Chassis_Speed_Pid.OutMin = -8400;
//	Chassis_Speed_Pid.OutOffset = 0;

	Gimbal_Speed_Pid.Kp = 16000;
	Gimbal_Speed_Pid.Ki = 5;
	Gimbal_Speed_Pid.Kd = 0;
	
	Gimbal_Speed_Pid.OutMax = 4000;
	Gimbal_Speed_Pid.OutMin = -4000;
//	Gimbal_Speed_Pid.OutOffset = 800;
			
  /* USER CODE END 2 */


/* USER CODE BEGIN 4 */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
//	if(GPIO_Pin==INT1_ACCEL_Pin||GPIO_Pin==INT1_GRYO_Pin)
//	{
//		BMI088_read(gyro,accel,&temp);
//		MahonyAHRSupdate(q,gyro[0],gyro[1],gyro[2],accel[0],accel[1],accel[2],0.0f,0.0f,0.0f);
//		get_angle(q,&yaw, &pitch, &roll);
//	}
}

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)
{
	if(htim==&htim1)
	{
		static uint16_t count;
		count++;
		TIM_IT_test++;
		BMI088_read(gyro,accel,&temp);
		MahonyAHRSupdate(q_curr,gyro[0],gyro[1],gyro[2],accel[0],accel[1],accel[2],0.0f,0.0f,0.0f);
		attitude_control(&Chassis_Speed_Pid, &Gimbal_Speed_Pid);
		if(count%5==0)	
		{
			CAN_cmd_chassis(Chassis_Speed_Pid.Out,Gimbal_Speed_Pid.Out,0,0);
		}
		
		
	}
}
/* USER CODE END 4 */
```

### · can

```c
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan)
{
    if(hcan==&hcan1)
	{
		CAN_RxHeaderTypeDef rx_header;
		uint8_t rx_data[8];
		HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &rx_header, rx_data);
		uint8_t j;
		for(j=0;j<8;j++)
		{
			Rx_test[j]=rx_data[j];
		}
		switch (rx_header.StdId)
		{
			case CAN_YAW_MOTOR_ID:
			{
				get_motor_measure(&Chassis_Speed, rx_data);
				break;
			
			}
			case CAN_PIT_MOTOR_ID:
			{
				get_motor_measure(&Gimbal_Speed, rx_data);
				break;
			}

			default:
			{
				break;
			}
		}
	}
}



void CAN_cmd_chassis(int16_t motor1, int16_t motor2, int16_t motor3, int16_t motor4)
{
    uint32_t send_mail_box;
    chassis_tx_message.StdId = 0x1FE;
    chassis_tx_message.IDE = CAN_ID_STD;
    chassis_tx_message.RTR = CAN_RTR_DATA;
    chassis_tx_message.DLC = 0x08;
    chassis_can_send_data[0] = motor1 >> 8;
    chassis_can_send_data[1] = motor1;
    chassis_can_send_data[2] = motor2 >> 8;
    chassis_can_send_data[3] = motor2;
    chassis_can_send_data[4] = motor3 >> 8;
    chassis_can_send_data[5] = motor3;
    chassis_can_send_data[6] = motor4 >> 8;
    chassis_can_send_data[7] = motor4;

    HAL_CAN_AddTxMessage(&CHASSIS_CAN, &chassis_tx_message, chassis_can_send_data, &send_mail_box);
}

int16_t getSpeed(uint8_t motor)
{
	if(motor==CHASSIS)
	{
		return Chassis_Speed;
	}
	if(motor==GIMBAL)
	{
		return Gimbal_Speed;
	}
	else
		return 0;
}K
```

### · 运作原理

**① 姿态获取**

定时器中断以 1 kHz 频率读取 BMI088 的陀螺仪和加速度数据，通过 Mahony AHRS 算法实时更新当前姿态四元数 `q_curr`，表示云台相对于世界坐标系的姿态。

**② 姿态误差计算**

将目标姿态四元数 `q_des`（设为单位四元数，表示世界系固定方向）与当前姿态 `q_curr` 做四元数运算，得到姿态误差四元数 `q_err`，其虚部近似表示云台在各轴上的姿态偏差。

**③ 控制量生成**

将姿态误差在俯仰轴和偏航轴上的分量分别作为误差输入到 PID 控制器中，PID 根据误差计算输出，得到对应电机的控制电流，用于驱动云台向目标姿态回正。

**④ 执行与反馈**

PID 输出的电流指令通过 CAN 总线周期性发送给云台电机，电机产生转矩带动云台运动；云台姿态变化再次被 IMU 测量，形成闭环控制，使云台在小角度扰动下保持在世界坐标系中稳定不动。