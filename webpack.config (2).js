var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jquery: "jQuery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
	],
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel-loader?presets[]=react,presets[]=es2015',
			exclude: /(node_modules)/
		}, {
			test: /\.css$/, // Only .css files
			loader: 'style!css' // Run both loaders
		}, {
			test: /\.(png|jpg|PNG)$/,
			loader: 'url?limit=25000'
		},{
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&minetype=application/font-woff'
		},{
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	}
};