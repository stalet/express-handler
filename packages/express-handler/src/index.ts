import { RequestHandler } from 'express';

export default (
        fn: RequestHandler,
    ) : RequestHandler =>
    (req, res, next): void => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
