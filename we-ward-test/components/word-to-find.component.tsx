import { View, Text, Pressable } from 'react-native';

import { GAME } from '~/utils/constants.utils';

interface WordToFindProps {
  wordToFindAsArray: string[];
  handleRemoveLetter: (letter: string, index: number) => void;
}

export const WordToFind = (props: WordToFindProps) => {
  const { wordToFindAsArray, handleRemoveLetter } = props;
  const bgColor = wordToFindAsArray?.join('') !== GAME?.wordToFind ? 'bg-red-500' : 'bg-green-500';
  const findEmptyIndexEmptyWord = wordToFindAsArray?.findIndex((item) => item === '');
  return (
    <View className="flex-row items-center justify-center">
      {wordToFindAsArray?.map((letter, index) => {
        return (
          <View key={index} className="m-4">
            <Pressable
              onPress={() => handleRemoveLetter(letter, index)}
              disabled={index === 0 || index === wordToFindAsArray?.length - 1}
              className={`aspect-square h-12 items-center justify-center rounded-md ${findEmptyIndexEmptyWord !== -1 ? 'bg-indigo-500 shadow-md active:bg-indigo-300' : bgColor}`}>
              <Text className="text-center text-lg font-semibold text-white">
                {letter.toUpperCase()}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
