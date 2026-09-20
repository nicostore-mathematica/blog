const { execSync } = require("child_process");

console.log("Running pre-commit hook...");

try {
	// Talks 页面暂时停用，保留以下逻辑以便后续恢复：
	// console.log("Fetching latest talks data...");
	// execSync("node.exe scripts/fetch-talks.cjs", { stdio: "inherit" });
	// execSync("git add docs/.vuepress/public/talks.json", { stdio: "inherit" });

	// Bangumi 页面暂时停用，保留以下逻辑以便后续恢复：
	// console.log("Fetching latest bangumi data...");
	// execSync("node.exe scripts/fetch-bangumi.cjs", { stdio: "inherit" });
	// execSync("git add docs/.vuepress/public/bangumi.json", { stdio: "inherit" });

	// 字数统计
	console.log("字数统计进行中...");
	execSync("node.exe scripts/wordcount.cjs", { stdio: "inherit" });

	// 添加更新后的数据文件
	execSync("git add docs/.vuepress/public/wordcount.json", { stdio: "inherit" });

	console.log("Generating homepage summary data...");
	execSync("node.exe scripts/generate-home-data.cjs", { stdio: "inherit" });

	execSync("git add docs/.vuepress/public/home-data.json", { stdio: "inherit" });

	console.log("✅ Pre-commit hook completed successfully");
} catch (error) {
	console.error("❌ Pre-commit hook failed:", error.message);
	process.exit(1);
}
