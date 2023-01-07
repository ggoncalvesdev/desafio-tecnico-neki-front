import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image, View } from "react-native";

import { DataProvider } from "../../context/DataContext";

import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { PageSkill } from "../../pages/skill";
import { Settings } from "../../pages/settings";
import { SplashScreen } from "../../pages/splashScreen";
import { Registration } from "../../pages/registration";
import { ActionModal } from "../../components/actionModal/ActionModal";

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
            <Tab.Screen
                name="Configurações"
                component={Settings}
                options={{
                    tabBarAccessibilityLabel: "Clique para ir para as configurações.",
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require("../../assets/icons/engrenagem.png")}
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
