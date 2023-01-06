import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, Icon } from "react-native-elements";

import { DataProvider } from "../../context/DataContext";

import { Login } from "../../pages/login";
import { UserList } from "../../pages/userList";
import { UserForm } from "../../pages/userForm";
import { SplashScreen } from "../../pages/splashScreen";
import { Registration } from "../../pages/registration";

function NavigateScreen() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            ),
                        };
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários",
                    }}
                />
            </Stack.Navigator>
        </>
    );
}
/* const screenOptions = {
  headerStyle: {
      backgroundColor: "#f4511e",
  },
  headerTitleStyle: {
      fontWeight: "bold",
  },
  headerTintColor: "#fff",
}; */
export function Routes() {
    return (
        <>
            <DataProvider>
                <NavigationContainer>
                    <NavigateScreen />
                </NavigationContainer>
            </DataProvider>
        </>
    );
}
