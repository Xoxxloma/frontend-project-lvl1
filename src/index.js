import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const correctAnswersValue = 3;
export default (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log();
  for (let i = 0; i < correctAnswersValue; i += 1) {
    const questionAnswer = getQuestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(); 
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
