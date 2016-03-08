import 'babel-core/register';
import express from 'express';
import webpack from 'webpack';
import path from 'path';

const app = express();
app.use(express.static('dist'));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'prod.html'))
});

app.listen(8080, () => {
    console.log('服务器启动成功！');
});
