var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var postcssNext = require('postcss-cssnext');
 
module.exports = {
	entry: './src/app.js',
	output: { path: __dirname, filename: 'bundle.js' },
	devServer: {
		contentBase: '.',
		colors: true,
		historyApiFallback: true,
		inline: true
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			},
			{ 
				test: /\.(png|jpg|svg)$/, 
				loader: 'url-loader?name=images/[name].[ext]' 
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		],
		postcss: function() {
			return [
				postcssImport(),
				postcssNext()
			]
		}
	},
};