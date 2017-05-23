/**
 * Created by Tristan on 17/4/4.
 */

const Router = require('koa-router');
const userService = require('../service/user.service');
const ParamError = require('moondust-error').ParamError;
const mdUtil = require('moondust-util');
let router = new Router().prefix('/api/');
router.post('/register.md', async (ctx) => {
    let username = ctx.request.body.username;
    if (!mdUtil.stringUtil.isMobile(username)) {
        throw new ParamError(500, 'username must be mobile');
    }
    let password = ctx.request.body.password;
    if (!mdUtil.stringUtil.isPassword(password)) {
        throw new ParamError(500, 'password not legale');
    }
    let user = await userService.register(username, password);
    ctx.body = user
});

module.exports = router;
