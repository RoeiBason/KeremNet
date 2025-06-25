import React, { FC } from 'react';
import { Avatar, ListItemAvatar, ListItemText, ListItem, List, Box } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Comment } from './type';
import './Comments.css';

interface Props {
  comments: Comment[];
}

const Comments: FC<Props> = ({ comments }) => {
  return (
    <Box className="comments-container">
      <List>
        {comments.map(({ author, content }, index) => (
          <ListItem key={index} className="comment-item">
            <ListItemAvatar >
              <Avatar className="comment-avatar">
                <CommentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${author}: ${content}`}
              className="comment-text"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Comments;
