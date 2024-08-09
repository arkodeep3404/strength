import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { goalPost, controlBar } from "../../exports/export";
import { useState } from "react";

export default function Tab5() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function renderGoalPostButton(rowIndex: number, buttonIndex: number) {
    const index = rowIndex * 4 + buttonIndex;

    return (
      <TouchableOpacity
        className={`h-28 w-20 border ${
          selectedIndex === index ? "bg-red-500" : "border-white"
        }`}
        key={index}
        onPress={() => setSelectedIndex(index)}
      />
    );
  }

  function renderGoalPostButtonsRow(rowIndex: number) {
    return (
      <View className="flex flex-row" key={rowIndex}>
        {Array.from({ length: 4 }, (_, i) => renderGoalPostButton(rowIndex, i))}
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

            <View className="absolute h-full w-full inset-y-[43%] inset-x-[5%] flex flex-col">
              {Array.from({ length: 2 }, (_, i) => renderGoalPostButtonsRow(i))}
            </View>
          </View>

          <View className="h-full w-full absolute items-end justify-end">
            <Image
              source={controlBar}
              className="h-[10%] w-full"
              resizeMode="stretch"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
