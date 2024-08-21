import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { goal_3, saved_3, missed_3 } from "../../../exports/export";
import { router } from "expo-router";

export default function Tab23() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex justify-center items-center bg-primary">
          <View className="h-[80%] w-[90%]">
            <View className="h-full w-full flex items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={goal_3}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={saved_3}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={missed_3}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
