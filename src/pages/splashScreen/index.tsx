import React, { useContext, useState } from "react";

import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

import { styles } from "./styles";
import Seta from "../../assets/icons/seta-direita.png";
import { DataContext } from "../../context/DataContext";
import { retrieveLocalData } from "../../services/LocalStorageService";
import { Logo } from "../../components/logo";

export function SplashScreen({ navigation }) {
    const { armazenaDadosUsuarioLogin } = useContext(DataContext);

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const usuarioLogado = async () => {
        try {
            const response = JSON.parse(await retrieveLocalData("user"));

            console.log("Valor do storage: " + response);
            if (response == null) {
                navigation.navigate("Login");
            }
            armazenaDadosUsuarioLogin(response["jwt-token"]);

            navigation.navigate("Home");
        } catch (error) {}
    };

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Logo />
            <LottieView source={require("../../assets/animated/splashScreen.json")} autoPlay loop />
            <SafeAreaView>
                <View style={styles.containerBotao}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => usuarioLogado()}
                        accessibilityLabel="Clique aqui para ir para a página de Login."
                    >
                        <View style={styles.containerTextoBotao}>
                            <Text style={[styles.textoBotao, themeTextStyle]}>Entrar</Text>
                            <Image source={Seta} style={[styles.setaBotao, themeContainerStyle]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}
