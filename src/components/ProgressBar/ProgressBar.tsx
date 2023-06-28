import React from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import * as styles from "./styles";

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { progress } = props;

  return (
    <Box sx={styles.container}>
      <Box>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
        <Box sx={styles.progressBar(progress)} />
      <Box>
        2/4
      </Box>
    </Box>
  );
};

export default ProgressBar;
