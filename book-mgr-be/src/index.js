//每一个文件都有自己的作用域
const Koa = require('koa');

const app = new Koa();

//通过app.use注册中间件
//中间件本质上 他就是一个函数
//context 上下文-当前请求的相关信息都在里面
app.use(async (context) => {
    //对象的解构
    const { request: req } = context;
    const { url } = req;

    if (url == '/') {
        context.response.body = '<h1>主页</h1>';

        return;
    }

    //路由
    if (url == '/user/list') {
        //访问数据库
        context.response.body = '<h1>用户列表</h1>';

        return;
    }

    context.body = '404';
    context.status = '404';
});

app.use((context) => {
    context.body = '找不到资源';
});

app.listen(3000, () => {
    console.log('启动成功');
});

console.log('112233');
