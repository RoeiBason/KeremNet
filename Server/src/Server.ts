import express from 'express';
import postRouter from './Routes/PostRoute';

const app = express();

app.use(express.json());
app.use('/posts', postRouter);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});









