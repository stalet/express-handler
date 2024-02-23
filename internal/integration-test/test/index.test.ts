import request from 'supertest';
import express from 'express';
import startServer from '../src/';

describe('Express Server', () => {
    let app: express.Application;

    beforeAll(async () => {
        app = await startServer({});
    });

    it('should return something', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        console.log(JSON.stringify(response.text))

        expect(response.text).toBe("Hello, World!");
    });

    it('should not fail', async () => {
        const response = await request(app).get('/fail');
        expect(response.status).toBe(500);
        expect(response.text).toContain("<title>Error</title>");
    });

});
