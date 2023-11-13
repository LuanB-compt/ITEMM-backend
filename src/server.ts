import App from "./App";
import { UserController } from "./controllers/UserController";
import { CallController } from "./controllers/CallController";

const app = new App([new UserController(), new CallController()], 3000);
app.listen();
