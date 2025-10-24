import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      'max-len': [
        'error',
        {
          code: 200,
          ignorePattern: '^(\\s*<path\\s+d="[^"]+"|\\s*<svg\\s+[^>]+>)', // 同时忽略svg和path的长属性
          ignoreUrls: true,
          ignoreStrings: true, // 忽略长字符串
          ignoreTemplateLiterals: true, // 忽略模板字符串
          ignoreRegExpLiterals: true, // 忽略正则表达式
        },
      ],
      '@next/next/no-img-element': 'off',
      'jsx-a11y/alt-text': 'off',
    },
  },
]);

export default eslintConfig;
