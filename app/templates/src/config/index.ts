// @ts-ignore
import pj from "../../package.json";
import dotenv from "dotenv";
dotenv.config();

export default {
  // Server Params
  appName: pj.name,
  version: pj.version,
  env: process.env.ENV || "dev",
  port: Number(process.env.PORT) || 3000,
};
