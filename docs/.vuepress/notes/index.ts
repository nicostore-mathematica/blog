import { defineCollections } from "vuepress-theme-plume";
import circuit from "./circuit.ts";
import integral from "./integral.ts";
import physics from "./physics.ts";
import probstathsy from "./probstathsy.ts";
import algebra from "./algebra.ts";
import CS from "./CS.ts";
import complex from "./complex.ts";
import cybernetics from "./cybernetics.ts";
import optics from "./optics.ts";
import electrodynamics from "./electrodynamics.ts";
import analyticalMechanics from "./analytical-mechanics.ts";
import computationalPhysics from "./computational-physics.ts";
import mathematicalPhysics from "./mathematical-physics.ts";
import signalAnalysis from "./signal-analysis.ts";

export const notes = defineCollections([
		circuit,
		integral,
		algebra,
		probstathsy,
		physics,
		CS,
		complex,
		computationalPhysics,
		cybernetics,
		optics,
		electrodynamics,
		analyticalMechanics,
		mathematicalPhysics,
		signalAnalysis,


]);