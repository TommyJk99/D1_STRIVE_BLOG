import express from "express";
import authorsRouter from "./authorsRouter.js";

const apiRouter = express.Router();

apiRouter.use("/authors", authorsRouter);

apiRouter.get("/", (req, res) => {
  res.json({ message: "apiRouter is working👍" });
});

export default apiRouter;
