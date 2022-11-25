import fastify from "fastify";

export default function server() {
  const App = fastify({
    logger: {
      level: "info",
      path: "./crebit.log"
    },
    ignoreTrailingSlash: true,
    http2: true,
    maxParamLength: 120,
    querystringParser: (str) => qs.parse(str),
  });
  //App.get("/forge", ForgeRouter);
  //App.get("/curseforge", Indev(_, reply));
  App.get("/", async (req , reply) => index(req,reply));
  App.get("/status", async (req , reply) => status(req,reply));
}
