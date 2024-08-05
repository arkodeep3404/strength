import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { goalPost, controlBar, goalGrid } from "../../exports/export";

export default function Tab5() {
  return (
    <>
      <SafeAreaView>
        <View className="h-full">
          <Image
            source={goalPost}
            className="h-[90%] w-full"
            resizeMode="stretch"
          />

          <Image
            source={controlBar}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />

          <View className="flex absolute h-full w-full top-[295px] left-5">
            <Image
              source={goalGrid}
              className="w-[325px] h-[225px]"
              resizeMode="stretch"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
