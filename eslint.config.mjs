import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "**/.next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local Git worktrees contain independent dependencies and build output.
    ".worktrees/**",
  ]),
  // 关掉与 Prettier 冲突的格式化类规则；必须放最后一项。
  eslintConfigPrettier,
]);

export default eslintConfig;
