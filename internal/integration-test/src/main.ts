import createServer from './index.js';

const server = await createServer({ port: 3000 }).finally(() => {
    console.log('Server is running');
});
