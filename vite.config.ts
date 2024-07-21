/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import type { UserConfig } from "vitest/config"

const test: UserConfig['test'] = {
	globals: true,
	environment: "jsdom",
	setupFiles: "./tests/setup.ts",
	passWithNoTests: true
}

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		netlifyPlugin(),
		tsconfigPaths(),
		// checker({
		// 	typescript: false,
		// 	eslint: {
		// 		lintCommand: packageInfo.scripts.lint,
		// 	},
		// }),
	],
	// @ts-expect-error vitest types not working for some reason.
	test,
});
