import app from './plugin.js';
import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

app(server);

server.listen(process.env.PORT || 8090, () => {
  
});