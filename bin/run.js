const app = require('../app');
const http = require('http')
const appInfo = require('../conf').appInfo;
http.createServer(app.callback()).listen(appInfo.port, () => {
    console.log(`passport-server#${__filename} 服务器启动成功：端口${appInfo.port}`)
})
