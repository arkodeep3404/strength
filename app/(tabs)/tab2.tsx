import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { turf, logo1, logo2 } from "../../exports/export";

export default function Tab2() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            source={turf}
            className="h-full w-full opacity-80"
            resizeMode="stretch"
          />
          <View className="absolute h-full w-full flex items-center justify-evenly">
            <Image
              source={logo1}
              className="h-[195px] w-[163px]"
              resizeMode="contain"
            />
            <Image
              source={logo2}
              className="h-[195px] w-[163px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
