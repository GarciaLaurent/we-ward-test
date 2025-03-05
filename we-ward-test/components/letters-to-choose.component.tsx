import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, Pressable } from 'react-native';

interface LettersToChooseProps {
  lettersToChoose: string[];
  handleAddLetter: (letter: string, index: number) => void;
  resetAllInput: () => void;
}

export const LettersToChoose = (props: LettersToChooseProps) => {
  const { lettersToChoose, handleAddLetter, resetAllInput } = props;

  return (
    <View className="flex-row flex-wrap">
      <View className="w-[80%] flex-row flex-wrap items-center justify-center">
        {lettersToChoose?.map((letter, index) => {
          return (
            <View key={index} className="mb-2 mr-2">
              <Pressable
                onPress={() => handleAddLetter(letter, index)}
                disabled={letter === ''}
                className="aspect-square h-12 items-center justify-center rounded-md bg-indigo-500 shadow-md active:bg-indigo-300">
                <Text className="text-center text-lg font-semibold text-white">
                  {letter?.toUpperCase()}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
      <View className="w-[20%] items-center justify-center">
        <Pressable
          onPress={() => resetAllInput()}
          className="aspect-square w-full items-center justify-center rounded-xl bg-red-400 shadow-md active:bg-indigo-300">
          <FontAwesome name="trash" size={45} color="white" />
        </Pressable>
      </View>
    </View>
  );
};
