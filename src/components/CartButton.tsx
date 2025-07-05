import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants/indes";
import "../global.css";

const CartButton = () => {
  const totalitems = 10;
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />

      {totalitems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalitems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
