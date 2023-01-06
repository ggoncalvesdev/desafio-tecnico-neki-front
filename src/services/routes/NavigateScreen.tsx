import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image, View } from "react-native";
import { Button, Icon } from "react-native-elements";

import { DataProvider } from "../../context/DataContext";

import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { UserList } from "../../pages/userList";
import { UserForm } from "../../pages/userForm";
import { SplashScreen } from "../../pages/splashScreen";
import { Registration } from "../../pages/registration";
import { AddButton } from "../../components/buttonModal";
import { ActionModal } from "../../components/actionModal/ActionModal";
import { PageSkill } from "../../pages/skill";

function NavigateScreen() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="PageSkill" component={PageSkill} options={{ headerShown: false }} />
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
const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2a8894",
                tabBarInactiveTintColor: "#211F1F",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    paddingBottom: 2,
                },
            }}
        >
            <Tab.Screen
                name="HomeTabScreen"
                component={Home}
                options={{
                    title: "Home",
                    tabBarAccessibilityLabel: "Clique para ir para a tela inicial.",
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require("../../assets/icons/casinha.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2a8894" : "#211F1F",
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="ADD"
                component={ActionModal}
                options={{
                    title: "Adicionar Skill",
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require("../../assets/icons/mais.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#2a8894" : "#211F1F",
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
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
