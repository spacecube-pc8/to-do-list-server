import express from "express";

import swaggerUi from "swagger-ui-express";
import { getTodoRoute } from "./routes/todo";
import { swaggerDocument } from "./swagger-docs/swagger";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// TODO: add POST and DELETE endpoints for /todo
app.route("/todo").get(getTodoRoute);

// TODO: create routes and functions for /todo/{id}

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
