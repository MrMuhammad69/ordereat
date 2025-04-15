import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{headerShown: false}}  />
    </>
  );
}
