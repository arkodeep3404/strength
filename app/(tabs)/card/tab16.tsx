import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { redCard, yellowCard } from "../../../exports/export";
import { router } from "expo-router";

export default function Tab16() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex justify-center items-center bg-primary">
          <View className="h-[80%] w-[90%]">
            <View className="h-full w-full flex items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/card/tab17")}>
                <Image
                  source={yellowCard}
                  className="h-[205px] w-[190px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/card/tab17")}>
                <Image
                  source={redCard}
                  className="h-[205px] w-[190px]"
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
