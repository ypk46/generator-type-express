import logger from "../../common/logger";

import { NextFunction, Request, Response } from "express";

/**
 * Logs basic request details. Must be added before
 * the routes.
 */
export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logging = {
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    body: req.body,
    ip: req.ip,
  };

  logger.info("request", req.logging);
  next();
};

export default {
  requestLogger,
};
