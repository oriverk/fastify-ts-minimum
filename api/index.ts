import * as fastify from "fastify";

interface Query {
  name?: string;
}

const app = fastify.fastify({ logger: true });

app.get<{ Querystring: Query }>("/", async (req, res) => {
  const { name = "World" } = req.query;
  req.log.info({ name }, "hello world!");
  return `Hello ${name}!`;
});

const handler = async (req: fastify.FastifyRequest, res: fastify.FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};

export default handler;