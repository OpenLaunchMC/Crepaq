// import * as fs from "fs";
// import * as path from "path";
import fastify, { RequestGenericInterface } from "fastify";
import * as qs from "qs";
import DownloadGithub from "./proxy/github/github";

interface DlRequestGeneric extends RequestGenericInterface {
  Params: {
    DownloadURL: string;
  };
}

export default async function Server() {
  const App = fastify({
    ignoreTrailingSlash: true,
    maxParamLength: 120,
    querystringParser: (str) => qs.parse(str),
    logger: {
      level: "all",
      transport: {
        target: "pino-pretty",
      },
      prettyPrint: {
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
  //App.get("/", IndexRouter(request, reply));
  //App.get("/status", StatusRouter);
  //App.get("/forge", ForgeRouter);

  /**
   * CurseForge Proxy API
   */
  App.get<DlRequestGeneric>("/curseforge/:DownloadURL", async (req, reply) => {
    reply.statusCode = 418;
    reply.send(
      "Hi! User from : " +
        req.ip.toString +
        ".\r\n[Indev] The page you are Looking for is under construction.\r\n" +
        '"The coffee pot is under manufacturing and the teapot couldn\'t process your request."'
    );
  });

  /**
   * Github Proxy API
   */
  App.get<DlRequestGeneric>("/github/:DownloadURL", async (req, reply) => {
    const DownloadContent = await DownloadGithub(req.params.DownloadURL);
    reply.send(DownloadContent);
  });
}
