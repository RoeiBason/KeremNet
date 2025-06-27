import { Request, Response } from "express";
import { PostService } from "../Services/PostService";

const postService = new PostService();

export class PostController {
    constructor(private postService: PostService) { }

    getAllPosts = (req: Request, res: Response): void => {
        const posts = this.postService.getAllPosts();
        if (posts.length === 0) {
            res.status(404).json({ message: "There are no post's" });
        } else {
            res.json(posts);
        }
    };

    getPostById = (req: Request, res: Response): void => {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Missing 'id' query parameter" });
            return;
        }
        const post = this.postService.getPostById(id);

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    };

    getPostByOwnerName = (req: Request, res: Response): void => {
        const { ownerName } = req.params;

        if (!ownerName) {
            res.status(400).json({ message: "Missing 'ownerName' query parameter" });
            return;
        }
        const posts = this.postService.getUsersByOwnerName(ownerName);

        if (posts.length > 0) {
            res.json(posts);
        } else {
            res.status(404).json({ message: "No posts found with the given ownerName" });
        }
    };

    getPostByDate = (req: Request, res: Response): void => {
        const { date } = req.params;

        if (!date) {
            res.status(400).json({ message: "Missing 'date' query parameter" });
            return;
        }
        const posts = this.postService.getUsersByDate(date);

        if (posts.length > 0) {
            res.json(posts);
        } else {
            res.status(404).json({ message: "No posts found with the given date" });
        }
    };
}