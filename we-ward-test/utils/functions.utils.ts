import { LETTERS, LETTERS_TO_MAKE_WORD } from './constants.utils';

export const generateRandomLettersArray = (wordToFindAsArrayLength: number) => {
  const letterArray = [];
  const arraySize = LETTERS_TO_MAKE_WORD - wordToFindAsArrayLength;
  for (let i = 0; i < arraySize; i++) {
    const randomLetter = Math.floor(Math.random() * LETTERS?.length);
    letterArray.push(LETTERS[randomLetter]);
  }
  return letterArray;
};

export const shuffleArray = (shuffleArray: string[]) => {
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }
  return shuffleArray;
};
