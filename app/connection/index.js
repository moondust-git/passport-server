/**
 * Created by Tristan on 17/4/23.
 */
const mongoose = require('mongoose');
const config = require('../../conf/index');
mongoose.Promise = global.Promise;
const mongo = mongoose.createConnection(config.mongoose.url, config.mongoose.options);
mongo.once('open', function () {
    console.log(`mongodb数据库连接成功${config.mongoose.url}`)
});
mongo.on('error', function () {
    console.error('mongo 数据库连接失败');
});
module.exports.mongo = mongo;


const redis = require("redis");
const client = redis.createClient(config.redis.port, config.redis.host, config.redis.options);
client.on('connect', () => {
    console.log(`redis 连接成功${config.redis.host}:${config.redis.port}`)
})
client.on("error", function (err) {
    console.error('redis 连接失败')
});
module.exports.redis = client;