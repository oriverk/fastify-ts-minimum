import * as fastify from "fastify";

interface Query {
  name?: string;
}

const app = fastify.fastify({
  logger: true,
  ignoreTrailingSlash: true
});

app.get<{ Querystring: Query }>("/", async (req, res) => {
  const { name = "World" } = req.query;
  req.log.info({ name }, "hello world!");
  return `Hello ${name}!`;
});

app.get('/cards', async (_req, _res) => {
  return { hello: 'world' }
})

app.get('/skills', async (_req, _res) => {
  return { page: 'skills' }
})

app.get('/unit-skills', async (_req, res) => {
  return { page: 'unit-skills' }
})

const handler = async (req: fastify.FastifyRequest, res: fastify.FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};

export default handler;