import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { goalPost, goalFootball, controlBar } from "../../../exports/export";
import { useState } from "react";
import { router } from "expo-router";

export default function Tab5() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function renderGoalPostButton(rowIndex: number, buttonIndex: number) {
    const index = rowIndex * 6 + buttonIndex;

    return (
      <TouchableOpacity
        className={`h-[105px] w-[54px] border ${
          selectedIndex === index ? "" : "border-white"
        }`}
        key={index}
        onPress={() => setSelectedIndex(index)}
      >
        {selectedIndex === index && (
          <ImageBackground
            source={goalFootball}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </TouchableOpacity>
    );
  }

  function renderGoalPostButtonsRow(rowIndex: number) {
    return (
      <View className="flex flex-row" key={rowIndex}>
        {Array.from({ length: 6 }, (_, i) => renderGoalPostButton(rowIndex, i))}
      </View>
    );
  }
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full bg-primary flex justify-start items-center">
          <View className="w-full h-[80%]">
            <Image
              source={goalPost}
              className="h-full w-full"
              resizeMode="stretch"
            />

            <View className="absolute h-full w-full inset-y-[43.5%] inset-x-[5%] flex flex-col">
              {Array.from({ length: 2 }, (_, i) => renderGoalPostButtonsRow(i))}
            </View>
          </View>

          <View className="h-full w-full absolute items-end justify-end">
            <Image
              source={controlBar}
              className="h-[10%] w-full"
              resizeMode="stretch"
            />

            <View className="flex flex-row absolute h-[10%] w-full">
              <TouchableOpacity
                className="h-full w-[50%]"
                onPress={() => router.push("/goal/tab4")}
              />
              <TouchableOpacity
                className="h-full w-[50%]"
                onPress={() => router.push("/tab1")}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
