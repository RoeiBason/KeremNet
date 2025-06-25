import React, { FC } from 'react';
import { PostType } from './type';
import { Avatar, ListItemAvatar, ListItemText, ListItem, List, Box } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import Post from '../Post/Post';

interface Props {
  posts: PostType[];
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <List>
      {posts.map(({ id, content, ownerName, comments, amountOfLikes, date }) => (
        <ListItem key={id} className="comment-item">
          <Post ownerName={ownerName} content={content} amountOfLikes={amountOfLikes} comments={comments} date={date}></Post>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;