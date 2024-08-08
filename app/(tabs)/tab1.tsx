import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { field, teams, homescreen } from "../../exports/export";

export default function Tab1() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="flex justify-center items-center h-full w-full">
          <View className="flex justify-center items-center h-[30%] w-full">
            <Image
              source={field}
              className="w-full h-full"
              resizeMode="stretch"
            />

            <View className="absolute w-full h-[full] flex justify-center items-center">
              <Image
                source={teams}
                className="w-[332px] h-[68px]"
                resizeMode="stretch"
              />
              <Text className="absolute text-white text-5xl"> 0-0 </Text>
            </View>
          </View>

          <Image
            source={homescreen}
            className="h-[70%] w-full"
            resizeMode="stretch"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
