import { FastifyReply, FastifyRequest } from "fastify";

export function Indev(req: FastifyRequest, reply: FastifyReply) {
  rreq.log.info()""
    eply.statusCode = 503;
  reply.send(
    "Sorry.\r\nCrebit is currently Under ATTACK.\r\nServices are unavailable."
  );
}
