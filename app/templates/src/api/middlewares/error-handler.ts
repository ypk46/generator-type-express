import logger from "../../common/logger";

import { NextFunction, Request, Response } from "express";

/**
 * Logs basic request details. Must be added before
 * the routes.
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line
) => {
  logger.error(err);
  const status = err.status || 500;
  res.status(status);
  res.json({
    status,
    result: { message: "Something went wrong, please try again later" },
  });
};

export default {
  errorHandler,
};
