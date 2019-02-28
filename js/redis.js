"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handy_redis_1 = require("handy-redis");
exports.default = handy_redis_1.createHandyClient({
    url: process.env.REDIS_URL
});
