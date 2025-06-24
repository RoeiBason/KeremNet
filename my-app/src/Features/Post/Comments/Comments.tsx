import React, { FC } from 'react';
import {Avatar, ListItemAvatar, ListItemText, ListItem, List, Box}  from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { PostComment } from './type';
import './comments.css';

interface Props {
  comments: PostComment[];
}

const Comments: FC<Props> = ({ comments }) => {
  return (
    <Box className="comments-container">
      <List className="comments-list">
        {comments.map((comment, index) => (
          <ListItem key={index} className="comment-item">
            <ListItemAvatar >
              <Avatar className="comment-avatar">
                <CommentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${comment.commentAuthor}: ${comment.commentText}`}
              className="comment-text"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Comments;
