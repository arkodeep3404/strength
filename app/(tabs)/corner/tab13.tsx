import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { goal_2, saved_2, missed_2, cleared } from "../../../exports/export";
import { router } from "expo-router";

export default function Tab13() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex justify-center items-center bg-primary">
          <View className="h-[80%] w-[90%]">
            <View className="h-full w-full flex items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={goal_2}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={saved_2}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={missed_2}
                  className="h-[100px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/tab1")}>
                <Image
                  source={cleared}
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
