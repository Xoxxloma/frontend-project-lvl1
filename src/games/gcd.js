#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import getRandom from '../helpers';
import gameEngine from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return getGcd(num2, num1 % num2);
};

const getQuestionAnswer = () => {
  const num1 = getRandom(1, 99);
  const num2 = getRandom(1, 99);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getQuestionAnswer);
