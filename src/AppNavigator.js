import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Detail } from "./containers";

const AppStackNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        path: ""
      },
      Detail: {
        screen: Detail
      }
    },
    {
      headerMode: "none"
    }
  )
);

const AppNavigator = createAppContainer(AppStackNavigator);

export default AppNavigator;
