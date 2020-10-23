import { Server } from "./server";
import routes from "./api";

const server = new Server();
server.addRoutes(routes);
server.start();
