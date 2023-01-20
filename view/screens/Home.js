import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { hero } from "../../assets";
import * as Animatable from "react-native-animatable";

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      className="flex-1 relative"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <View className="flex-row px-6 mt-8 space-x-2 ">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-3xl font-bold mt-3.5">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[38px] font-light">Enjoy the trip with</Text>
        <Text className="text-[35px] font-bold text-[#00BCC9]">
          Good moments
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          felis enim, aliquet.
        </Text>
      </View>

      <View className=" w-[350px] h-[350px] rounded-full absolute bg-[#00BCC9] bottom-32 -right-36 "></View>
      <View className=" w-[350px] h-[350px] rounded-full absolute bg-[#a100c9] -bottom-10 -left-36 "></View>

      <View className=" flex-1 justify-center items-center relative ">
        <Animatable.Image
          animation="zoomIn"
          easing="ease-in-out"
          source={hero}
          className=" w-full h-full object-cover"
        />

        <TouchableOpacity className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center ">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className=" text-gray-50 text-[30px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
