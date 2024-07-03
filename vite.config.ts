import {vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {netlifyPlugin} from '@netlify/remix-adapter/plugin';
import { checker } from 'vite-plugin-checker';
import packageInfo from "./package.json"

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
		checker({
			typescript: true,
			eslint: {
				lintCommand: packageInfo.scripts.lint
			}
		}),
	],
});
