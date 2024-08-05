import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  turf,
  team1,
  team2,
  team3,
  keeper,
  teamBar,
  controlBar,
} from "../../exports/export";

export default function Tab3() {
  return (
    <>
      <SafeAreaView>
        <View className="h-full">
          <Image
            source={turf}
            className="h-[80%] w-full opacity-80"
            resizeMode="stretch"
          />
          <View className="absolute h-[80%] w-full flex items-center justify-evenly">
            <Image
              source={team1}
              className="h-[80px] w-[275px]"
              resizeMode="contain"
            />
            <Image
              source={team2}
              className="h-[80px] w-[275px]"
              resizeMode="contain"
            />
            <Image
              source={team3}
              className="h-[80px] w-[365px]"
              resizeMode="contain"
            />
            <Image
              source={keeper}
              className="h-[80px] w-[90px]"
              resizeMode="contain"
            />
          </View>
          <Image
            source={teamBar}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />
          <Image
            source={controlBar}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
