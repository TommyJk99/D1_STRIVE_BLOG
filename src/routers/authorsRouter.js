import express from "express";
import { Author } from "../modules/authors.js";

const authorsRouter = express.Router();

authorsRouter.get("/", async (req, res, next) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch (error) {
    next(error);
  }
});

export default authorsRouter;

authorsRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.params);

    const user = await Author.findById(id);

    if (!user) {
      return res.status(404).send();
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

authorsRouter.post("");
