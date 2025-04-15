import React from "react";
import "../global.css";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "react-native";
import CustomHeader from "@/components/Header";

export default function Layout() {
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack 
        screenOptions={{
          header: (props) => <CustomHeader title={props.options.title}/>
        }}
      />
    </>
  );
}
