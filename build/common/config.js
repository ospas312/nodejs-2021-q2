"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.join(__dirname, '../../.env')
});
/* module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true'
}; */
_a = process.env, exports.PORT = _a.PORT, exports.NODE_ENV = _a.NODE_ENV, exports.MONGO_CONNECTION_STRING = _a.MONGO_CONNECTION_STRING, exports.JWT_SECRET_KEY = _a.JWT_SECRET_KEY, exports.AUTH_MODE = _a.AUTH_MODE;
