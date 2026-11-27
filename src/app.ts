import express from "express";
import { notFoundMiddleware, errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;