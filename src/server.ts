import App from "./App";
import { ReplyController } from "./controllers/ReplyController";
import { UserController } from "./controllers/UserController";
import { CallController } from "./controllers/CallController";

const app = new App([new UserController(), new CallController(), new ReplyController], 3000);
app.listen();
