import React from "react";
import { View, Text, useColorScheme, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { clearStorage } from "../../services/LocalStorageService";

import LogoBranca from "../../assets/icons/logo-agile-branca.png";
import LogoPreta from "../../assets/icons/logo-agile.png";
import { styles } from "./styles";

export function Settings({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const AppExit = () => {
        clearStorage();
        navigation.navigate("SplashScreen");
    };
    return (
        <>
            <View style={[styles.container, themeContainerStyle]}>
                <View>
                    <Text style={[styles.textTitle, themeTextStyle]}>Configurações</Text>
                    <Text style={[styles.text, themeTextStyle]}>Tema atual: {colorScheme}</Text>

                    <TouchableOpacity style={styles.exit} onPress={() => AppExit()}>
                        <Ionicons name="exit" size={28} style={themeTextStyle} />
                        <Text style={[styles.exitText, themeTextStyle]}>Sair</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.InfoApp}>
                    {colorScheme === "light" ? (
                        <Image source={LogoPreta} style={styles.imgLogo} />
                    ) : (
                        <Image source={LogoBranca} style={styles.imgLogo} />
                    )}
                    <Text style={[styles.App, themeTextStyle]}>Versão do App</Text>
                    <Text style={[styles.Version, themeTextStyle]}>1.0.0</Text>
                </View>
            </View>
        </>
    );
}
