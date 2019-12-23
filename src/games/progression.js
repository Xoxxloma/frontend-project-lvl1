#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import getRandom from '../helpers';
import gameEngine from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const firstNum = getRandom(0, 25);

const getQuestionAnswer = () => {
  const hiddenNumIdx = getRandom(0, progressionLength - 1);
  const diff = getRandom(1, 10);

  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumIdx) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstNum + i * diff}`.trim();
    }
  }
  const correctAnswer = String(firstNum + hiddenNumIdx * diff);

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getQuestionAnswer);
