import express, { Express } from 'express';
import handler from '@stalet/express-handler';

export type Config = {
    port?: number;
};

export default (config: Config): Promise<Express> => {
    return new Promise((resolve) => {
        const app = express();

        app.get(
            '/',
            handler((req, res) => {
                res.send('Hello, World!');
            })
        );

        app.get(
            '/fail',
            handler((req, res) => {
                throw "FOO";
            })
        );

        if(config.port) {
            app.listen(config.port, () => {
                resolve(app);
            });
        } else {
            resolve(app);
        }
    }

)};
