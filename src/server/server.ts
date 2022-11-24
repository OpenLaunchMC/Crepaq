import * as fs from "fs";
import * as path from "path";
import fastify from "fastify";
import * as qs from "qs";

import StatusRouter from "./interface/status";
import IndexRouter from "./index";
import { Indev } from "./interface/error/indev";

export default function server() {
  const App = fastify({
    ignoreTrailingSlash: true,
    http2: true,
    maxParamLength: 120,
    querystringParser: (str) => qs.parse(str),
  });
  //App.get("/", IndexRouter(request, reply));
  //App.get("/status", StatusRouter);
  //App.get("/forge", ForgeRouter);
  //App.get("/curseforge", Indev(_, reply));
  App.get("/", async (_, reply) => {
    reply.send("Under Construction");
    return;
  });
}
