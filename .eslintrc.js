// eslint-config-prettier
// ESLintとprettierの処理で重複する項目について無効化してくれる

// eslint-plugin-prettier
// prettierで設定できるルールをESLintのルールとして処理できるようにする

module.exports = {
    parser: '@typescript-eslint/parser', // TSをESLintで解釈できるようにするparser
    // extends にて、プラグインが提供する推奨設定を指定できます。
    extends: [
        'eslint:recommended', // eslint 推奨ルール
        'plugin:prettier/recommended', // eslint-plugin-prettier 推奨設定
        'plugin:@typescript-eslint/recommended', // typescript-eslint 推奨設定
        'prettier/@typescript-eslint',// ESLintにないTS固有のルールを担う
        'plugin:react/recommended',
        'plugin:jest/recommended'
    ],
    settings: {
        react: {
            version: require('./package.json').dependencies.react,
            pragma: "React",
            linkComponents: [
                // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
                "Hyperlink",
                {"name": "Link", "linkAttribute": "to"}
            ]
        },
    },
    plugins: [
        '@typescript-eslint',
        'jest'
    ],
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
    },
    env: {
        'browser': true,
        'node': true,
        'jest/globals': true
    },
    rules: {
        // .eslintrc.js にPrettierのルールを定義 →
        // ESLintの処理時にPrettierのルールもやってもらう
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'semi': false,
            'endOfLine': 'lf'
        }],
        '@typescript-eslint/explicit-function-return-type': 0, // ts-lintとの差分吸収
        '@typescript-eslint/explicit-member-accessibility': 0, // ts-lintとの差分吸収
        'react/prop-types': 'off', // tsとの差分吸収

        // 空のinterface OK
        '@typescript-eslint/no-empty-interface': 0,
    }
}
