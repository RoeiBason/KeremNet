import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Comments from './Comments/Comments';
import Likes from './Likes/Likes';
import { PostComment } from './Comments/type';
import './post.css';

interface Props {
  comments: PostComment[];
  amountOfLikes: number;
  postText: string;
  postOwnerName: string;
}

const Post: FC<Props> = ({ postText, postOwnerName, comments, amountOfLikes }) => {
  const date = new Date().toLocaleDateString();

  return (
    <Box className="post-container">
      <Typography variant="h3" className="post-owner-name">
        {postOwnerName}'s Post
      </Typography>
      <Typography className="post-text">
        {postText}
      </Typography>
      <Box className="comments-section">
        <Comments comments={comments} />
      </Box>
      <Box className="post-footer">
        <Typography className="post-date">
          {date}
        </Typography>
        <Likes amountOfLikes={amountOfLikes} />
      </Box>
    </Box>
  );
};

export default Post;