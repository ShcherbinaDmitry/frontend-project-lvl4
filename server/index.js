import app from './plugin.js';
import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

app(server);

const port = process.env.PORT || 8090;
const host = '0.0.0.0';

server.listen(port, host);