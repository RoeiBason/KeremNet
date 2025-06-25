import { Comment } from '../Post/Comments/type';

export interface PostType {
    id:number;
    comments: Comment[];
    amountOfLikes: number;
    content: string;
    ownerName: string;
    date: string;
}