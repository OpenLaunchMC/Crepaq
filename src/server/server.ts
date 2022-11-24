import fastify from "fastify";

export default function server() {
  const App = fastify({
    ignoreTrailingSlash: true,
    http2: true,
    maxParamLength: 120,
    querystringParser: (str) => qs.parse(str),
  });
  //App.get("/forge", ForgeRouter);
  //App.get("/curseforge", Indev(_, reply));
  App.get("/", async (_, reply) => index(reply));
  App.get("/status", async (_, reply) => status(reply));
}
