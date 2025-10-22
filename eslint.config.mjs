export default {
    root: true,
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 2],
        'vue/html-indent': ['error', 2],
        'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
        'eol-last': ['error', 'always'],
        'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true }],
    },
    ignorePatterns: ['.nuxt/', 'dist/', 'node_modules/'],
}
