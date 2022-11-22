"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var qs = require("qs");
var status_1 = require("./interface/status");
var index_1 = require("./index");
var indev_1 = require("./interface/error/indev");
function server() {
    var App = (0, fastify_1.default)({
        ignoreTrailingSlash: true,
        http2: true,
        maxParamLength: 120,
        querystringParser: function (str) { return qs.parse(str); },
    });
    App.get("/", (0, index_1.default)(request, reply));
    App.get("/status", status_1.default);
    App.get("/forge", ForgeRouter);
    App.get("/curseforge", (0, indev_1.Indev)(_, reply));
    App.get;
}
exports.default = server;
