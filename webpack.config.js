const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'public'),
  publicPath: '/public/',
  filename: 'bundle.js',
};

module.exports = {
  entry, output,
	devtool: "eval-source-map",
	devServer: {
		hot: true,
		port: 8080,
	},
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			},
    ],
  },
};    
          