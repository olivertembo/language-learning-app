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
      <Box sx={styles.imageContainer}>
        <Image
          className="image"
          src={image}
          alt="Picture of the author"
          fill={true}
        />
      </Box>
      <Box sx={styles.title}>
        <Typography variant="h4">{name}</Typography>
      </Box>
    </Box>
  );
};

export default QuestionCard;
