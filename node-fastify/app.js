const fastify = require('fastify')({ logger: false });

fastify.get('/', (request, reply) => {
    return 'Hello, World!';
});

const start = async () => {
    try {
        await fastify.listen({ port: 8082 });
        console.log(`Server is running on http://localhost:8082`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
