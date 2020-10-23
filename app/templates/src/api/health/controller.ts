import { Request, Response } from "express";
import config from "../../config";

export class HealthController {
  ping = (req: Request, res: Response) => {
    res.json({
      status: 200,
      result: { message: "pong", version: config.version },
    });
  };
}

export default new HealthController();
