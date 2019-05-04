const defaultConfig = require('../config/webpack.config')

module.exports = ({ config }) => {
    // デフォルト設定をざっくりとかぶせる
    config.resolve = defaultConfig().resolve

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
            {
                loader: require.resolve('@storybook/addon-storysource/loader'),
                options: { parser: 'typescript' }
            }
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};

