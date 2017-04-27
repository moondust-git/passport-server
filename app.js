/**
 * Created by Tristan on 2017/3/29.
 */
const Koa = require('koa');
const server = new Koa();
const path = require('path');
const parser = require('koa-bodyparser');
const Logger = require('koa-logger');
const convert = require('koa-convert');
const cross = require('koa2-cors');
const routerLoader = require('moondust-koa2-route-loader');
const NotFound = require("moondust-error").NotFound;
const handler = require('moondust-error-handler');


//-------midleware
server.use(parser());
server.use(Logger());
server.use(cross());
server.use(handler());

routerLoader(server, path.join(__dirname, 'app/router')).then(() => {
        server.use(async (ctx) => {
            ctx.throw(new NotFound(404, 'notfound'))
        });
    }
);
module.exports = server;