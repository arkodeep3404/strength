import { Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  field,
  attempt,
  card,
  corner,
  foul,
  freekick,
  goal,
  half,
  offside,
  pause,
  penalty,
  plus,
  substitution,
  throwIcon,
  timer,
  undo,
  team_1,
  team_2,
} from "../../exports/export";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function Tab1() {
  function CountdownTimer({ duration }: { duration: number }) {
    const [timeRemaining, setTimeRemaining] = useState(duration);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(secs).padStart(2, "0")}`;
    };

    return (
      <Text className="text-white">
        {timeRemaining > 0 ? formatTime(timeRemaining) : "Time's up!"}
      </Text>
    );
  }
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="flex justify-center items-center h-full w-full bg-primary">
          <View className="flex justify-center items-center h-[30%] w-full">
            <Image
              source={field}
              className="w-full h-full"
              resizeMode="stretch"
            />

            <View className="absolute w-full h-full flex flex-row justify-evenly items-center">
              <Image
                source={team_1}
                className="w-[80px] h-[80px]"
                resizeMode="stretch"
              />
              <Text className="text-white text-5xl"> 0-0 </Text>
              <Image
                source={team_2}
                className="w-[80px] h-[80px]"
                resizeMode="stretch"
              />
            </View>
          </View>

          <View className="h-[70%] w-full">
            <View className="p-2 pt-5 flex flex-row items-center justify-evenly">
              <View className="h-[35px] w-[100px]">
                <Image
                  source={half}
                  className="h-full w-full"
                  resizeMode="stretch"
                />
                <View className="absolute w-full h-full flex items-center justify-center">
                  <Text className="text-white text-base font-bold">
                    1st Half
                  </Text>
                </View>
              </View>

              <View className="h-[55px] w-[140px]">
                <Image
                  source={timer}
                  className="h-full w-full"
                  resizeMode="stretch"
                />
                <View className="absolute w-full h-full flex items-center justify-center">
                  <CountdownTimer duration={3600} />
                </View>
              </View>

              <Image
                source={plus}
                className="h-[35px] w-[40px]"
                resizeMode="stretch"
              />
              <Image
                source={pause}
                className="h-[35px] w-[40px]"
                resizeMode="stretch"
              />
            </View>
            <View className="p-2 pt-10 flex flex-row items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/goal/tab2")}>
                <Image
                  source={goal}
                  className="h-[85px] w-[175px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/attempt/tab6")}>
                <Image
                  source={attempt}
                  className="h-[85px] w-[175px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <Image
                source={foul}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />

              <TouchableOpacity onPress={() => router.push("/throw/tab9")}>
                <Image
                  source={throwIcon}
                  className="h-[60px] w-[115px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/corner/tab11")}>
                <Image
                  source={corner}
                  className="h-[60px] w-[115px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <TouchableOpacity onPress={() => router.push("/offside/tab14")}>
                <Image
                  source={offside}
                  className="h-[60px] w-[115px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/card/tab16")}>
                <Image
                  source={card}
                  className="h-[60px] w-[115px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <Image
                source={undo}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <TouchableOpacity
                onPress={() => router.push("/substitution/tab19")}
              >
                <Image
                  source={substitution}
                  className="h-[60px] w-[115px]"
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <Image
                source={penalty}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
              <Image
                source={freekick}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
