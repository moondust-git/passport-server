/**
 * Created by Tristan on 17/4/23.
 */
const mongoose = require('mongoose');
const config = require('../../conf/index');
mongoose.Promise = global.Promise;
const mongo = mongoose.createConnection(config.mongoose.url, config.mongoose.options);
mongo.once('open', function () {
    console.log(`passport-server#${__filename} mongodb数据库连接成功${config.mongoose.url}`)
});
mongo.on('error', function (err) {
    console.error(`passport-server#${__filename}  mongo 数据库连接失败:${err.message}`);
});
module.exports.mongo = mongo;


const redis = require("redis");
const redis_client = redis.createClient(config.redis.port, config.redis.host, config.redis.options);
redis_client.on('connect', () => {
    console.log(`passport-server#${__filename}  redis 连接成功${config.redis.host}:${config.redis.port}`)
});

redis_client.on("error", function (err) {
    console.error(`passport-server#${__filename}  redis 连接失败:${err.message}`);
});
module.exports.redis = redis_client;