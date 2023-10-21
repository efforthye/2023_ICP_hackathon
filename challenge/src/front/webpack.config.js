const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/your_entry_file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: 'node', // Node.js 환경으로 설정
    externals: [nodeExternals()], // Node.js 모듈을 외부 모듈로 처리
};
