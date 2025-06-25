import React, { FC } from 'react';
import { PostType } from './type';
import {ListItem, List, Box } from '@mui/material';
import Post from '../Post/Post';
import './PostList.css'


interface Props {
  posts: PostType[];
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <Box>
      <List>
        {posts.map(({id, content, ownerName, comments, amountOfLikes, date}) => (
          <ListItem key={id} className="post-item">
            <Post ownerName={ownerName} content={content} amountOfLikes={amountOfLikes} comments={comments} date={date}></Post>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PostList;