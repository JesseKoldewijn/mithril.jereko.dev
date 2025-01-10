import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		plugins: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			"jsx-a11y": jsxA11y,
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						"*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}",
					],
				},
				tsconfigRootDir: import.meta.dirname,
				ecmaVersion: "latest",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"@typescript-eslint/array-type": "off",
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "inline-type-imports" },
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/no-misused-promises": [
				"error",
				{ checksVoidReturn: { attributes: false } },
			],
		},
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...jsxA11y.flatConfigs.strict,
];

export default config;
