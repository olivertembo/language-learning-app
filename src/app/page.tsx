'use client';

import { useState } from 'react';
import { ProgressBar }  from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { questions } from '../constants/questions';
import styles from './page.module.css'

export default function Home() {
  const [ current, setCurrent ] = useState(1);

  return (
    <main className={styles.main}>
      <div className={styles.app}>
        <ProgressBar current={1} total={questions.length} />
        <QuestionCard name={questions[current].name} image={questions[current].image} />
      </div>
    </main>
  );
}
