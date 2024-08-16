import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
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
  pandey,
  ritam,
  vasu,
  rakesh,
  teamBar,
  controlBar,
} from "../../../exports/export";
import { router } from "expo-router";

export default function Tab20() {
  const [selectedPlayers, setSelectedPlayers] = useState(new Set());

  const toggleSelectPlayer = (player: string) => {
    setSelectedPlayers((prev) => {
      const newSelectedPlayers = new Set(prev);
      if (newSelectedPlayers.has(player)) {
        newSelectedPlayers.delete(player);
      } else {
        newSelectedPlayers.add(player);
      }
      return newSelectedPlayers;
    });
  };

  const getPlayerStyle = (player: string) => ({
    height: 75,
    width: 90,
    borderWidth: selectedPlayers.has(player) ? 1 : 0,
    borderColor: selectedPlayers.has(player) ? "#747474" : "transparent",
    backgroundColor: selectedPlayers.has(player) ? "#DA6E6E66" : "transparent",
    borderRadius: 10,
  });

  const getPlayerStyle2 = (player: string) => ({
    height: 75,
    width: 90,
    borderWidth: selectedPlayers.has(player) ? 1 : 0,
    borderColor: selectedPlayers.has(player) ? "#747474" : "transparent",
    backgroundColor: selectedPlayers.has(player) ? "#12956B66" : "transparent",
    borderRadius: 10,
  });

  return (
    <SafeAreaView className="h-full w-full">
      <View className="h-full w-full flex items-center justify-start bg-primary">
        <View className="h-[70%] w-full mt-[20%]">
          <Image
            source={turf}
            className="h-[80%] w-full opacity-80"
            resizeMode="stretch"
          />

          <View className="absolute h-[80%] w-full flex items-center justify-evenly">
            <View className="w-full flex flex-row items-center justify-center">
              <TouchableOpacity onPress={() => toggleSelectPlayer("riyan")}>
                <Image
                  source={riyan}
                  style={getPlayerStyle("riyan")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("sasank")}>
                <Image
                  source={sasank}
                  style={getPlayerStyle("sasank")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("abhishek")}>
                <Image
                  source={abhishek}
                  style={getPlayerStyle("abhishek")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View className="w-full flex flex-row items-center justify-center">
              <TouchableOpacity onPress={() => toggleSelectPlayer("jeet")}>
                <Image
                  source={jeet}
                  style={getPlayerStyle("jeet")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("sidharth")}>
                <Image
                  source={sidharth}
                  style={getPlayerStyle("sidharth")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("shekhar")}>
                <Image
                  source={shekhar}
                  style={getPlayerStyle("shekhar")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View className="w-full flex flex-row items-center justify-center">
              <TouchableOpacity onPress={() => toggleSelectPlayer("nikhil")}>
                <Image
                  source={nikhil}
                  style={getPlayerStyle("nikhil")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("rohan")}>
                <Image
                  source={rohan}
                  style={getPlayerStyle("rohan")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("vikram")}>
                <Image
                  source={vikram}
                  style={getPlayerStyle("vikram")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSelectPlayer("shubham")}>
                <Image
                  source={shubham}
                  style={getPlayerStyle("shubham")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View className="w-full flex flex-row items-center justify-center">
              <TouchableOpacity onPress={() => toggleSelectPlayer("rahul")}>
                <Image
                  source={rahul}
                  style={getPlayerStyle("rahul")}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={teamBar}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />
        </View>
        <View className="absolute flex flex-col h-full w-full justify-end items-center">
          <View className="flex flex-row justify-evenly items-center mb-[5%]">
            <TouchableOpacity onPress={() => toggleSelectPlayer("pandey")}>
              <Image
                source={pandey}
                style={getPlayerStyle2("pandey")}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleSelectPlayer("ritam")}>
              <Image
                source={ritam}
                style={getPlayerStyle2("ritam")}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleSelectPlayer("vasu")}>
              <Image
                source={vasu}
                style={getPlayerStyle2("vasu")}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleSelectPlayer("rakesh")}>
              <Image
                source={rakesh}
                style={getPlayerStyle2("rakesh")}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <Image
            source={controlBar}
            className="h-[10%] w-full"
            resizeMode="stretch"
          />
          <View className="flex flex-row absolute h-[10%] w-full">
            <TouchableOpacity
              className="h-full w-[50%]"
              onPress={() => router.push("/substitution/tab19")}
            />
            <TouchableOpacity
              className="h-full w-[50%]"
              onPress={() => router.push("/tab1")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
