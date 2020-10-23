export interface Route {
  path: string;
  method: string;
  handler: any;
  setPrefix: boolean;
}
