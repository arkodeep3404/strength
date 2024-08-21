import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tackle, handball, others } from "../../../exports/export";
import { router } from "expo-router";

export default function Tab30() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex justify-center items-center bg-primary">
          <View className="h-[80%] w-[90%]">
            <View className="h-full w-full flex items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/foul/tab31")}>
                <Image
                  source={tackle}
                  className="h-[180px] w-[165px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/foul/tab31")}>
                <Image
                  source={handball}
                  className="h-[180px] w-[165px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/foul/tab31")}>
                <Image
                  source={others}
                  className="h-[90px] w-[165px]"
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
