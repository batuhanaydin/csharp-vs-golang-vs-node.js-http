const cluster = require('cluster');
const os = require('os');
const fastify = require('fastify')({ logger: false });

const numCPUs = 8;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    fastify.get('/', (request, reply) => {
        return 'Hello, World!';
    });

    const start = async () => {
        try {
            await fastify.listen({ port: 8082 });
            console.log(`Worker ${process.pid} started on http://localhost:8082`);
        } catch (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    };

    start();
}
