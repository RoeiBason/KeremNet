import express, { Request, Response } from 'express';
import { PostService } from './Services/PostService';
import { PostType } from '../../my-app/src/Features/HomePage/type';
import postRouter from './Routes/PostRoute';

const app = express();
const inMemoryStorage: PostService = new PostService();

// app.use(express.json());


// app.use('/posts' , postRouter);

app.listen(4000, () => {
    console.log("Server stardet at http://localhost:4000")
});

app.get('/posts', (req: Request, res: Response) => {
    res.send(inMemoryStorage.data);
});



app.get('/posts/:postId', (req: Request, res: Response) => {
    const { postId } = req.params;
    let post = inMemoryStorage.find((post: PostType) => post.id === postId)[0];
    res.send(post);
})


app.get('/posts/ownerName/:ownerName', (req: Request, res: Response) => {
    const { ownerName } = req.params;
    let posts = inMemoryStorage.find((post: PostType) => post.ownerName === ownerName);
    res.send(posts);
})

app.get('/posts/date/:date', (req: Request, res: Response) => {
    const { date } = req.params;
    let posts = inMemoryStorage.find((post: PostType) => post.date === date);
    res.send(posts);
})








