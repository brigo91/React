const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'boundle.js',
		publicPath: ''
	},
	devtool: 'cheap-module-eval-source-map'
};
