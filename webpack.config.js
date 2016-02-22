import path from 'path';
import webpack from 'webpack';

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
                loaders: [ 'babel' ],
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                loaders: [ 'style', 'raw' ],
                include: path.join(__dirname,  'node_modules')
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};