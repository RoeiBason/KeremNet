import { Router } from 'express';
import { PostController } from '../Contorllers/PostController';

const postRouter = Router();
const postController = new PostController();

// postRouter.get('/', postController.getAllPosts);
// postRouter.get('/:id', postController.getPostById);


export default postRouter;
