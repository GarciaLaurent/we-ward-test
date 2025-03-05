import React from 'react';

import { Container } from '~/components/container.component';
import { ImagesGrid } from '~/components/images-grid.component';
import { LettersToChoose } from '~/components/letters-to-choose.component';
import { WordToFind } from '~/components/word-to-find.component';
import { useFindWordActions } from '~/hooks/find-word-actions.hook';

export default function Home() {
  const { emptyWord, shuffleLetters, handleRemoveLetter, handleAddLetter, resetAllInput } =
    useFindWordActions();

  return (
    <Container>
      <ImagesGrid />
      <WordToFind
        wordToFindAsArray={emptyWord}
        handleRemoveLetter={(letter, index) => handleRemoveLetter(letter, index)}
      />
      <LettersToChoose
        lettersToChoose={shuffleLetters}
        resetAllInput={() => resetAllInput()}
        handleAddLetter={(letter, index) => handleAddLetter(letter, index)}
      />
    </Container>
  );
}
