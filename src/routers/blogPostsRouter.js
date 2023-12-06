import express from "express";
import { BlogPost } from "../modules/blogPosts.js";

const blogPostsRouter = express.Router();

blogPostsRouter.use(express.json());

blogPostsRouter.get("/", async (req, res, next) => {
  try {
    const blogPosts = await BlogPost.find({});
    res.json(blogPosts);
  } catch (err) {
    err.statusCode = 404;
    next(err);
  }
});

blogPostsRouter.get("/:id", async (req, res, next) => {
  try {
  } catch {}
});

export default blogPostsRouter;
