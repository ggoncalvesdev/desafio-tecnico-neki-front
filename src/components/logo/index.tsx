import React from "react";
import { Appearance, useColorScheme } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

export function Logo() {
    const colorScheme = Appearance.getColorScheme();

    if (colorScheme === "light") {
        return (
            <Animatable.Image
                animation="flipInY"
                style={styles.logoAgile}
                source={require("../../assets/icons/logo-agile.png")}
            />
        );
    } else {
        return (
            <Animatable.Image
                animation="flipInY"
                style={styles.logoAgile}
                source={require("../../assets/icons/logo-agile-branca.png")}
            />
        );
    }
}
