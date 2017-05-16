/**
 * Created by Tristan on 17/4/27.
 */
let route = new require('koa-router')().prefix('/api');
let mdUtil = require('moondust-util');
let ParamError = require("moondust-error").ParamError;
module.exports = route;
route.post('/login.md', async (ctx) => {
    await mdUtil.requestUtil.checkProperties(ctx.request.body, "username", "password");
    ctx.body = 'ok'
});