import 'babel-core/register';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import webpackConfig from './webpack.config';

const app = express();
const env = process.env.NODE_ENV || 'development';
const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    stats: {
        colors: true
    }
});
const hotMiddleware = webpackHotMiddleware(compiler);

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(compress());
app.use(express.static('public'));
app.use(methodOverride());
app.use(devMiddleware);
app.use(hotMiddleware);

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(8080, () => {
    console.log('服务器启动成功！');
});
