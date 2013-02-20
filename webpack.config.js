var path = require("path");
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
	provide: {
		$: "jquery",
		jQuery: "jquery"
	},
	amd: {
		jQuery: true
	},
	cache: true,
	optimize: {
		maxChunks: 10,
		// minChunkSize: 10000
	}
};