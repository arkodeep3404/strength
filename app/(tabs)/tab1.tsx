import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { field, teams, homescreen } from "../../exports/export";

export default function Tab1() {
  return (
    <>
      <SafeAreaView className="h-full">
        <View className="flex justify-center items-center">
          <Image
            source={field}
            className="w-full h-[250px]"
            resizeMode="contain"
          />

          <Image
            source={teams}
            className="w-[332px] h-[68px] absolute"
            resizeMode="contain"
          />
          <Text className="absolute text-white text-5xl"> 0-0 </Text>
        </View>

        <View>
          <Image
            source={homescreen}
            className="h-[81%] w-full"
            resizeMode="stretch"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
