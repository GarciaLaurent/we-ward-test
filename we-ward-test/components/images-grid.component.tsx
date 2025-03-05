import { View, Image } from 'react-native';

import { GAME } from '~/utils/constants.utils';

export const ImagesGrid = () => {
  return (
    <View className="flex-row flex-wrap">
      {GAME?.images?.map((image, index) => {
        return (
          <View
            key={image?.id}
            className={`mb-2 w-[49%] p-2 ${index % 2 === 0 ? 'mr-2' : null} rounded-lg bg-indigo-500`}>
            <Image source={image?.source} className="h-[200px] w-full" />
          </View>
        );
      })}
    </View>
  );
};
