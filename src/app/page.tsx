'use client';

import { useState } from 'react';
import { ProgressBar }  from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { questions } from '../constants/questions';
import styles from './page.module.css'
import { Typography } from '@mui/material';

export default function Home() {
  const [ current, setCurrent ] = useState(1);

  return (
    <main className={styles.main}>
      <div className={styles.app}>
        <ProgressBar current={1} total={questions.length} />
        <Typography
          sx={{
            color: "#50535e",
            fontSize: "1.2rem",
          }}
          variant="body1"
        >
          Is this the correct translation?
        </Typography>
        <Typography
          sx={{
            color: "#9b9fad",
            fontSize: "1.2rem",
          }}
          variant="body1"
        >
          Swipe the card left or right
        </Typography>
        <QuestionCard
          name={questions[current].name}
          image={questions[current].image}
        />
      </div>
    </main>
  );
}
