//import * as path from "path";
import fastify from "fastify";
import * as qs from "qs";
import ejs from "ejs";

// import StatusRouter from "./interface/status";
// import IndexRouter from "./index";
// import { Indev } from "./interface/error/indev";

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
    ejs.renderFile("src/server/interface/index.ejs", {}, (err, str) => {
      reply.send(str);
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
    req.params.
  });
}
