import express from "express";

import UserRouter from "./routes/user.js";
import TaskRouter from "./routes/task.js";
import errorHandler from "./middlewares/error.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/users", UserRouter);
app.use("/tasks", TaskRouter);

// Error Handler
app.use((req, res, next) => {
  next({ message: "page not found" });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
