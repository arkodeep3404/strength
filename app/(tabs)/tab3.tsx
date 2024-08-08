import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  turf,
  riyan,
  sasank,
  abhishek,
  jeet,
  sidharth,
  shekhar,
  nikhil,
  rohan,
  vikram,
  shubham,
  rahul,
  teamBar,
  controlBar,
} from "../../exports/export";

export default function Tab3() {
  return (
    <>
      <SafeAreaView className="h-full w-full">
        <View className="h-full w-full flex items-center justify-center bg-primary">
          <View className="h-[80%] w-full">
            <Image
              source={turf}
              className="h-[80%] w-full opacity-80"
              resizeMode="stretch"
            />

            <View className="absolute h-[80%] w-full flex items-center justify-evenly">
              <View className="w-full flex flex-row items-center justify-center">
                <Image
                  source={riyan}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={sasank}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={abhishek}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
              </View>
              <View className="w-full flex flex-row items-center justify-center">
                <Image
                  source={jeet}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={sidharth}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={shekhar}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
              </View>
              <View className="w-full flex flex-row items-center justify-center">
                <Image
                  source={nikhil}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={rohan}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={vikram}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
                <Image
                  source={shubham}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
              </View>
              <View className="w-full flex flex-row items-center justify-center">
                <Image
                  source={rahul}
                  className="h-[75px] w-[90px]"
                  resizeMode="stretch"
                />
              </View>
            </View>

            <Image
              source={teamBar}
              className="h-[10%] w-full"
              resizeMode="stretch"
            />
          </View>
          <View className="absolute flex h-full w-full items-end justify-end">
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
