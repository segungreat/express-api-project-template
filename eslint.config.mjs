// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    // TypeScript & JavaScript config
    tseslint.config({
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: "latest",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        rules: {
            "prefer-const": "warn",
            "no-constant-binary-expression": "error",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    }),
);