import { Request, Response } from 'express';
import { PostService } from '../Services/PostService';
import { PostType } from '../../../my-app/src/Features/HomePage/type';

const postService = new PostService();

class PostController {
    getAllPosts(req: Request, res: Response): Response {
        const posts = postService.data;
        if(posts){
            return res.json(posts);
        }
        else{
            return res.status(404).json({ message: "'There are no Post's available" });
        }
        
    }

    getPostById(req: Request, res: Response): Response {
        const { postId } = req.params;
        const post = postService.find((post: PostType) => post.id === postId)[0];;
        if (post) {
            return res.json(post);
        }
        return res.status(404).json({ message: 'Post not found' });
    }

    


}

export { PostController }