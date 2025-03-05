import { useState } from 'react';

import { GAME } from '~/utils/constants.utils';
import { generateRandomLettersArray, shuffleArray } from '~/utils/functions.utils';

export const useFindWordActions = () => {
  const wordToFindAsArray = [...GAME?.wordToFind];
  const defaultEmptyWord = wordToFindAsArray.map((char, index) => {
    return index === 0 || index === wordToFindAsArray?.length - 1 ? char : '';
  });
  const randomLetters = generateRandomLettersArray(wordToFindAsArray?.length);
  const defaultShuffleLetters = shuffleArray(randomLetters?.concat(wordToFindAsArray));

  const [emptyWord, setEmptyWord] = useState(defaultEmptyWord);
  const [shuffleLetters, setShuffleLetters] = useState(defaultShuffleLetters);

  const handleRemoveLetter = (letterToRemove: string, positionEmptyWord: number) => {
    const findEmptyIndexShuffleLetters = shuffleLetters?.findIndex((item) => item === '');
    const newShowWordArray = emptyWord?.map((letter, i) =>
      letter === letterToRemove && i === positionEmptyWord ? '' : letter
    );
    shuffleLetters[findEmptyIndexShuffleLetters] = letterToRemove;
    setEmptyWord([...newShowWordArray]);
    setShuffleLetters([...shuffleLetters]);
  };

  const handleAddLetter = (letterToAdd: string, positionShuffleLetters: number) => {
    const findEmptyIndexEmptyWord = emptyWord?.findIndex((item) => item === '');
    if (findEmptyIndexEmptyWord !== -1) {
      emptyWord[findEmptyIndexEmptyWord] = letterToAdd;
      shuffleLetters[positionShuffleLetters] = '';
    }
    setEmptyWord([...emptyWord]);
    setShuffleLetters([...shuffleLetters]);
  };

  const resetAllInput = () => {
    setEmptyWord(defaultEmptyWord);
    setShuffleLetters(defaultShuffleLetters);
  };

  return {
    handleRemoveLetter,
    handleAddLetter,
    resetAllInput,
    emptyWord,
    shuffleLetters,
  };
};
