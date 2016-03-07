import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	entry: [
        'webpack-hot-middleware/client?reload=true',
    	'./index.js'
    ],
    output: {
        path: '/',
	    filename: 'bundle.js',
	    publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                loaders: ['style', 'raw'],
                include: path.join(__dirname,  'public')
            },
            { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
            }
            // {
            //      test: /.*\.(png|gif|svg|jpe?g)$/,
            //      loader: 'file?name=../../images/[hash:8].[name].[ext]',
            //      include: path.join(__dirname, "..",  "public")
            // }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};