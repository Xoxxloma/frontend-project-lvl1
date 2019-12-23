#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import getRandom from '../helpers';
import gameEngine from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const num = getRandom(1, 101);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameEngine(description, getQuestionAnswer);
