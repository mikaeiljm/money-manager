import express from "express";
import { notFoundMiddleware, errorMiddleware } from "./middlewares/error.middleware.js";
import { AppError } from "./utils/app-error.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/test-app-error", () => {
  throw new AppError("This is my error", 400);
});

app.get("/test-crash", () => {
  throw new Error("secret internal detail");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;