import config from "../config";
import { createLogger, transports, format } from "winston";

const transport = [new transports.Console()];

export const logger = createLogger({
  level: config.env === "prod" ? "info" : "debug",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD hh:mm:ss a",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: transport,
  exitOnError: false,
});

export default logger;
