import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	esbuild: {
		jsx: "transform",
		jsxFactory: "m",
		jsxFragment: "'['",
		jsxInject: `import m from 'mithril';import $ from 'jquery';`,
	},
	plugins: [tailwindcss()],
});
