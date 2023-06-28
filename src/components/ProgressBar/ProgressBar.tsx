'use client'

import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as styles from "./styles";

export interface ProgressBarProps {
  total: number;
  current: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { total, current } = props;
  const progress = (current / total) * 100;
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.cancelButton}>
        <IconButton aria-label="delete" size="medium">
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box sx={styles.progressBarContainer}>
        <Box sx={styles.progressBar(progress)} />
      </Box>
      <Box sx={styles.progressRatio}>
        {current}/{total}
      </Box>
    </Box>
  );
};

export default ProgressBar;
