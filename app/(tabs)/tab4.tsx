import { useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  topTeam,
  bottomTeam,
  goalField,
  football,
  controlBar,
} from "../../exports/export";

export default function Tab4() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function renderGoalButton(rowIndex: number, buttonIndex: number) {
    const index = rowIndex * 11 + buttonIndex;

    return (
      <TouchableOpacity
        className={`h-7 w-7 border ${
          selectedIndex === index ? "" : "border-white"
        }`}
        key={index}
        onPress={() => setSelectedIndex(index)}
      >
        {selectedIndex === index && (
          <ImageBackground
            source={football}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </TouchableOpacity>
    );
  }

  function renderGoalButtonsRow(rowIndex: number) {
    return (
      <View className="flex flex-row" key={rowIndex}>
        {Array.from({ length: 11 }, (_, i) => renderGoalButton(rowIndex, i))}
      </View>
    );
  }

  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex items-center justify-center bg-primary">
          <View className="w-full h-[80%]">
            <Image
              source={topTeam}
              className="h-[10%] w-full"
              resizeMode="stretch"
            />

            <View className="h-[75%] w-full">
              <Image
                source={goalField}
                className="h-full w-full"
                resizeMode="stretch"
              />

              <View className="absolute h-full w-full inset-y-[4%] inset-x-[7%] flex flex-col">
                {Array.from({ length: 14 }, (_, i) => renderGoalButtonsRow(i))}
              </View>
            </View>

            <Image
              source={bottomTeam}
              className="h-[10%] w-full"
              resizeMode="stretch"
            />
          </View>
          <View className="absolute w-full h-full flex items-end justify-end">
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
