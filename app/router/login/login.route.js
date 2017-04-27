/**
 * Created by Tristan on 17/4/27.
 */
let route = new require('koa-router')().prefix('/api');
let formatUtil = require('moondust-util').formatUtil;
let ParamError=require("moondust-error").ParamError;
module.exports = route;
route.post('/login.md', async (ctx) => {
    let username = ctx.request.body.username;
    if(!formatUtil.isMobile(username)){
        throw new ParamError(500,'not mobile');
    }
    ctx.body = 'ok'
});