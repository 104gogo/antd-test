var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(__dirname, '..', 'dist');
var projectRootPath = path.join(__dirname, '../');

module.exports = {
    devtool: 'false',
	entry: {
        main: [
    	   path.join(__dirname, '../src', 'index.js')
        ],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'immutable', 'history', 'react-router']
    },
    output: {
        path: assetsPath,
	    filename: 'bundle.js',
	    publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            { test: /\.css?$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),//删除目标文件夹
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),//捆绑第三方库文件
        new ExtractTextPlugin('[name].css', { allChunks: true }),//合并sass和css文件为一个css文件
        new webpack.DefinePlugin({//加入这个避免redux报错
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.NoErrorsPlugin()
    ]
};