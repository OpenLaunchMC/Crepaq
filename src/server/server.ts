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
  App.get("/", (req , reply) => {
    req.
  });
  App.get("/status", (req , reply) => {
    req.
  });
  App.get("/forge", (req , reply) => {
    req.
  });
  App.get("/curseforge",(req , reply) => {
    req.
  });
  App.get("/github" , (req , reply) => {
    reply.
  });
}
