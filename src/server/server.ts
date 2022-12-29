import fastify from "fastify";
import qs from "qs";

export default async function Server() {
  const App = fastify({
    ignoreTrailingSlash: true,
    maxParamLength: 120,
    querystringParser: (str) => qs.parse(str),
    logger: {
      level: "all",
      file: "logs/crebit.log",
      transport: {
        target: "pino-pretty",
      },
      prettifier: {
        timestampKey: "time",
      },
      redact: ["req.headers.authorization"],
      serializers: {
        res(reply) {
          return {
            statusCode: reply.statusCode,
          };
        },
        req(request) {
          return {
            /**
             * URL is for Functions Stat
             * Headers are for Launchers Stat
             * IP Address is for Region Stat
             */
            method: request.method,
            url: request.url,
            path: request.routerPath,
            parameters: request.params,
            headers: request.headers,
            remoteAddress: request.ip,
          };
        },
      },
    },
  });
}
