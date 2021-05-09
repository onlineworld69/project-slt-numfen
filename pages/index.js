// @generated: @expo/next-adapter@2.1.52
import React from "react";
import styled from "styled-components/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./screens/landing";
import Result from "./screens/results";
import Payment from "./screens/payment";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ title: "Thần Số Học", headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{
                headerLeft: () => null,
                title: "Kết Quả",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerLeft: () => null, headerTitleAlign: "center" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </PaperProvider>
  );
}

const Container = styled.View`
  flex: 1;
  margin: 0 auto;
  width: 100%;
`;
