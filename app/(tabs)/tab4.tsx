import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  topTeam,
  bottomTeam,
  goalField,
  controlBar,
} from "../../exports/export";

export default function Tab4() {
  return (
    <>
      <SafeAreaView>
        <View className="h-full">
          <Image
            source={topTeam}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />

          <Image
            source={goalField}
            className="h-[70%] w-full"
            resizeMode="stretch"
          />

          <Image
            source={bottomTeam}
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
