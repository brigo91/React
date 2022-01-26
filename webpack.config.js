const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'boundle.js',
		publicPath: ''
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{	loader: 'style-loader'	},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]__[hash:base:64:5]'
							}
						}
					},
					{
						loader: 'post-loader',
						options: {
							ident: postcss,
							plugins: () => [autoprefixer()]
						}
					}
				]
			}
		]
	}
};
