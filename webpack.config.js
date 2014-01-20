var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: "./app/app.js",
	output: {
		path: path.join(__dirname, "assets"),
		publicPath: "assets/",
		filename: "web.js",
		chunkFilename: "[id].[hash].js"
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.jade$/, loader: "jade-loader" },
			{ test: /\.css$/,  loader: "style-loader!css-loader" },
			{ test: /\.png$/,  loader: "file-loader" },
			{ test: /\.swf$/,  loader: "file-loader" }
		]
	},
	resolve: {
		alias: {
			jquery: "jquery-2.0.3.js"
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 10
		})
	],
	cache: true
};