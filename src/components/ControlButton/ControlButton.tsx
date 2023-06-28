'use client'

import React from "react";
import { Box, IconButton } from "@mui/material";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import * as styles from "./styles";

export interface ControlButtonProps {
  handleLike?: () => void;
  handleDislike?: () => void;
}

export const ControlButton = (props: ControlButtonProps) => {
  const { handleLike, handleDislike } = props;
  
  return (
    <Box sx={styles.container}>
      <IconButton
        className="dislike-button"
        onClick={handleDislike}
        aria-label="delete"
        size="large"
      >
        <ThumbDownIcon
          fontSize="inherit"
        />
      </IconButton>
      <IconButton
        className="like-button"
        onClick={handleLike}
        aria-label="delete"
        size="large"
      >
        <ThumbUpIcon
          fontSize="inherit"
        />
      </IconButton>
    </Box>
  );
};

export default ControlButton;
