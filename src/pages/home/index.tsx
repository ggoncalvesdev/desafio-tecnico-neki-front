import React, { useContext, useEffect, useState } from "react";
import { Text, useColorScheme } from "react-native";
import { DataContext } from "../../context/DataContext";
import { styles } from "./styles";

export function Home({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const { dadosUsuarioLogin } = useContext(DataContext);
    console.log("dadosUsuarioLogin: " + dadosUsuarioLogin.token);

    return (
        <>
            <Text>Home</Text>
        </>
    );
}
