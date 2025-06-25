import React, { FC } from 'react';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Likes.css'

interface Props {
  amountOfLikes: number;
}

const Likes: FC<Props> = ({ amountOfLikes }) => {
  return (
    <Badge badgeContent={amountOfLikes} className="likes-badge">
      <FavoriteBorderIcon className="likes-icon" />
    </Badge>
  );
};

export default Likes;