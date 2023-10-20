require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const frontendDirectory = 'front';
const frontend_entry = path.join('src', frontendDirectory, 'src', 'index.html');

module.exports = {
    target: 'web',
    entry: {
        index: './src/index.jsx',
    },
    module: {
        rules: [{ test: /\.(js|ts)x?$/, loader: 'ts-loader' }],
    },
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist', frontendDirectory),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, frontend_entry),
            cache: false,
        }),
        new webpack.EnvironmentPlugin([
            ...Object.keys(process.env).filter((key) => {
                if (key.includes('CANISTER')) return true;
                if (key.includes('DFX')) return true;
                return false;
            }),
        ]),
        new webpack.ProvidePlugin({
            Buffer: [require.resolve('buffer/'), 'Buffer'],
            process: require.resolve('process/browser'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: `src/${frontendDirectory}/src/.ic-assets.json*`,
                    to: '.ic-assets.json5',
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
    // proxy /api to port 4943 during development.
    // if you edit dfx.json to define a project-specific local network, change the port to match.
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4943',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api',
                },
            },
        },
        static: path.resolve(__dirname, 'src', frontendDirectory, 'public'),
        hot: true,
        watchFiles: [path.resolve(__dirname, 'src', frontendDirectory)],
        liveReload: true,
    },
};
