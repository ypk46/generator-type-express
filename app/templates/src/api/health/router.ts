import controller from "./controller";

import { Route } from "../../interfaces/route";

const routes: Route[] = [
  {
    path: "/ping",
    method: "get",
    handler: [controller.ping],
    setPrefix: false,
  },
];

export default routes;
