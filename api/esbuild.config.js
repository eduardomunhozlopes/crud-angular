import { writeFileSync } from "node:fs";
import { build } from "esbuild";

build({
	entryPoints: ["src/server.ts"],
	outfile: "dist/index.js",
	bundle: true,
	minify: true,
	platform: "node",
	target: "node20",
	sourcemap: false,
	treeShaking: true,
	legalComments: "none",
	external: ["express"],
	metafile: true,
	logLevel: "info",
}).then((result) => {
	writeFileSync("dist/meta.json", JSON.stringify(result.metafile));
});
