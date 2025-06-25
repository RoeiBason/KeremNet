import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Comments from './Comments/Comments';
import Likes from './Likes/Likes';
import { Comment } from './Comments/type';
import './Post.css';

interface Props {
  comments: Comment[];
  amountOfLikes: number;
  content: string;
  ownerName: string;
  date: string
}

const Post: FC<Props> = ({ content, ownerName, comments, amountOfLikes, date }) => {

  return (
    <Box className="post-container">
      <Typography variant="h3" className="post-owner-name">
        {ownerName}'s Post
      </Typography>
      <Typography className="post-content">
        {content}
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