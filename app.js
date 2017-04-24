/**
 * Created by Tristan on 2017/3/29.
 */
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const bodyparser = require('koa-bodyparser');
const Logger = require('koa-logger');
const convert = require('koa-convert');
const cors = require('koa2-cors');
const routerLoader=require('moondust-koa2-route-loader');


//-------midleware
app.use(bodyparser());
app.use(Logger());
app.use(cors());


app.use(async (ctx, next) => {
    try {
        await next()
    } catch (e) {
        console.error(e.message);
        console.error(e.stack);
        ctx.status = 500;
        ctx.body = {status: e.code || 500, message: e.message, name: e.name}
    }
});
routerLoader(app,path.join(__dirname,'app/router'));

app.use(async (ctx) => {
    await  ctx.render('index')
});
module.exports = app;