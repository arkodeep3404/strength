import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { turf, logo1, logo2 } from "../../../exports/export";
import { router } from "expo-router";

export default function Tab2() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex justify-center items-center bg-primary">
          <View className="h-[80%] w-[90%]">
            <Image
              source={turf}
              className="h-full w-full opacity-80"
              resizeMode="stretch"
            />
            <View className="absolute h-full w-full flex items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/goal/tab3")}>
                <Image
                  source={logo1}
                  className="h-[195px] w-[163px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/goal/tab3")}>
                <Image
                  source={logo2}
                  className="h-[195px] w-[163px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
