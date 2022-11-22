"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indev = void 0;
function Indev(req, reply) {
    reply.statusCode = 418;
    reply.send("Hi! User from : " +
        req.ip.toString +
        ".\r\n[Indev] The page you are Looking for is under construction.\r\n" +
        '"The coffee pot is under manufacturing and the teapot couldn\'t process your request."');
}
exports.Indev = Indev;
