"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indev = void 0;
function Indev(req, reply) {
    reply.statusCode = 503;
    reply.send("Sorry.\r\nCrebit is currently Under ATTACK.\r\nServices are unavailable.");
}
exports.Indev = Indev;
