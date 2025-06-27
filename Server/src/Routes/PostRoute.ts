import { Router } from "express";
import { PostService } from "../Services/PostService";
import { PostController } from "../Contorllers/PostController";

const postRouter = Router();
const postService = new PostService();
const postController = new PostController(postService);

postRouter.get("/", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.get("/ownerName/:ownerName", postController.getPostByOwnerName)
postRouter.get("/date/:date", postController.getPostByDate)

export default postRouter;
