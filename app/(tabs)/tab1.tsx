import { Text, Image, View } from "react-native";
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

export default function Tab1() {
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
              <Image
                source={half}
                className="h-[34px] w-[100px]"
                resizeMode="stretch"
              />
              <Image
                source={timer}
                className="h-[54px] w-[140px]"
                resizeMode="stretch"
              />
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
              <Image
                source={goal}
                className="h-[85px] w-[175px]"
                resizeMode="stretch"
              />
              <Image
                source={attempt}
                className="h-[85px] w-[175px]"
                resizeMode="stretch"
              />
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <Image
                source={foul}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
              <Image
                source={throwIcon}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
              <Image
                source={corner}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <Image
                source={offside}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
              <Image
                source={card}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
              <Image
                source={undo}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
            </View>
            <View className="p-2 flex flex-row items-center justify-evenly">
              <Image
                source={substitution}
                className="h-[60px] w-[115px]"
                resizeMode="stretch"
              />
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
