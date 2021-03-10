import * as fastify from "fastify";

interface Query {
  name?: string;
}

const app = fastify.fastify({
  logger: true,
  ignoreTrailingSlash: true
});

app.get<{ Querystring: Query }>("/api", async (req, _res) => {
  const { name = "World" } = req.query;
  req.log.info({ name }, "hello world!");
  return `Hello ${name}!`;
});

app.get('/api/cards', async (_req, _res) => {
  return { hello: 'world' }
})

app.get('/api/skills', async (_req, _res) => {
  return { page: 'skills' }
})

app.get('/api/unit-skills', async (_req, _res) => {
  return { page: 'unit-skills' }
})

const PORT = process.env.PORT || 3000
const start = async () => {
  try {
    await app.listen(PORT)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

export default start()

// const handler = async (req: fastify.FastifyRequest, res: fastify.FastifyReply) => {
//   await app.ready();
//   app.server.emit("request", req, res);
// };

// export default handler;