declare namespace Express {
  interface Request {
    logging?: {
      method: string;
      body: string;
      url: string;
      query: any;
      ip: any;
      err?: any;
      stack?: any;
    };
  }
}
