//每一个文件都有自己的作用域

const Koa = require('koa');
const koaBody = require('koa-body');
const Body = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const cors = require('@koa/cors');


const app = new Koa();

connect().then(() => {
    app.use(cors());
    app.use(koaBody());

    registerRoutes(app);
    //开启一个http服务
    //接受http 请求 并作处理，处理完后相应
    app.listen(3000, () => {
        console.log('启动成功');
    });
});