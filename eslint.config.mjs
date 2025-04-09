import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
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
];

export default eslintConfig;
