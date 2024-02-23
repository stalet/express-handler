import type { NextFunction, Request, Response } from 'express';

export default (
        fn: (
            req: Request,
            res: Response,
            next: NextFunction,
        ) => Promise<Response>,
    ) =>
    (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req as Request, res as Response, next)).catch(next);
    };
