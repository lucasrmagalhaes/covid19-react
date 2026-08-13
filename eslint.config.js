import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'dev-dist', 'node_modules'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  prettier,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['public/service-worker.js'],
    languageOptions: { globals: { ...globals.serviceworker } },
  },
  {
    files: ['vite.config.js', 'eslint.config.js', '**/*.test.{js,jsx}', 'src/setupTests.js'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
]
