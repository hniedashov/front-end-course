const path = require('path');
const distDir = path.resolve(__dirname, './dist');
const helpersDir = path.resolve(__dirname, './src/js/helpers/');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: distDir,
    },
    devServer: {
        static: distDir,
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            Helpers: helpersDir
        }
    }
};