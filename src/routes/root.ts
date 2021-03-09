import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: false }
  })

  fastify.get('/api', async function (req, res){
    return { root: false }
  })
}

export default root;
