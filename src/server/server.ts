//import * as path from "path";
//import ejs = require("ejs");

import fastify from "fastify";
import * as qs from "qs";
import * as ejs from "ejs";

export default function server() {
  const App = fastify({
    ignoreTrailingSlash: true,
    http2: true,
    maxParamLength: 120,
    querystringParser : (str) => qs.parse(str),
  });

  App.register(require("@fastify/view"), {
    engine: {
      ejs: require("ejs"),
    },
  });

  App.get("/", (req , reply) => {
    ejs.renderFile("src/server/pages/index.ejs", {}, (err , str) => {
      if (err) {
        App.log.error(err);
        return;
      } else {
        reply.send(str);
      }
    });
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
    req.
  });
}
