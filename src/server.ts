import App from "./App";
import { ReplyController } from "./controllers/ReplyController";
import { UserController } from "./controllers/UserController";

const app = new App([new UserController(), new ReplyController], 3000);
app.listen();
