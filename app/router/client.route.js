/**
 * Created by Tristan on 17/3/19.
 */
const Router = require('koa-router')
const ClientService = require('../service/client.service')
const ParamError = require('moondust-error').ParamError;
const stringUtil = require('moondust-util').stringUtil;
const route = new Router().prefix('/api/client');
route.post('/register.md', async (ctx) => {
    let client_name = ctx.request.body.client_name;
    let redirect_uri = ctx.request.body.redirect_uri;
    if (stringUtil.isEmpty(client_name)) {
        throw new ParamError(1101, 'client name error')
    }
    if (!stringUtil.isUrl(redirect_uri)) {
        throw new ParamError(1102, 'redirect_uri error')
    }
    let client = await ClientService.register(client_name, redirect_uri);
    ctx.body = client
});
module.exports = route;
