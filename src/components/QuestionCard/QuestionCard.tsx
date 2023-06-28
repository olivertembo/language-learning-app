'use client'

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import * as styles from "./styles";
import Image from "next/image";

export interface QuestionCardProps {
  image: string;
  name: string;
}

export const QuestionCard = (props: QuestionCardProps) => {
  const { image, name } = props;

  return (
    <Box sx={styles.container}>
      <Typography
        sx={{
          color: "#000",
        }}
        variant="h5"
      >
        Is this the correct translation?
      </Typography>
      <Typography
        sx={{
          color: "#000",
        }}
        variant="body1"
      >
        Swipe the card left or right
      </Typography>
      <Box
        sx={{
          position: "relative",
          Height: "200px",
        }}
      >
        <Image src={image} alt="Picture of the author" fill={true} />
        <Typography variant="h6">{name}</Typography>
      </Box>
    </Box>
  );
};

export default QuestionCard;
