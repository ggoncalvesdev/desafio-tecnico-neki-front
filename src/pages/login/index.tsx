import React, { useState, useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/logo";
import { Alerta } from "../../components/alert";
import Seta from "../../assets/icons/seta-direita.png";
import { DataContext } from "../../context/DataContext";
import authService from "../../services/Api/Request/authService";
import { storeLocalData } from "../../services/LocalStorageService";

export function Login({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [isSelected, setSelected] = useState(false);
    const [carregando, setCarregando] = useState<boolean>(true);
    const { armazenaDadosUsuarioLogin } = useContext(DataContext);

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const handleLogin = async () => {
        var tokenJwt: any = null;

        try {
            const retorno = await authService.sigin({
                login: login,
                password: password,
            });
            console.log("retorno", retorno.status);

            if (retorno.status === 200) {
                tokenJwt = retorno.data;
                armazenaDadosUsuarioLogin(tokenJwt["jwt-token"]);

                storeLocalData("user", tokenJwt);
                /* storageCheckBox(); */
                navigation.navigate("Home");
            }
        } catch (error) {
            Alerta("Oops!", "Login ou senha errados");
        }
    };
    /*   const storageCheckBox = () => {
        storeLocalData("login", login);
        console.log("Login armazenado no local storage");
    };
    const getSorageCheckBox = () => {
        retrieveLocalData("login");
    }; */
    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Logo />
            <SafeAreaView>
                <Animatable.View animation="fadeInUp" style={styles.containerImput}>
                    <TextInput
                        placeholder="Login"
                        style={styles.input}
                        onChangeText={setLogin}
                        value={login}
                        accessibilityLabel="Insira o seu login aqui."
                    />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={hidePass}
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        accessibilityLabel="Insira sua senha aqui."
                    />
                    <TouchableOpacity style={styles.eyevisible} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <>
                                <Ionicons name="eye-off-outline" size={24} color="#0050AF" />
                            </>
                        ) : (
                            <>
                                <Ionicons name="eye-outline" size={24} color="#0050AF" />
                            </>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Registration")}
                        accessibilityLabel="Não tem um cadastro? Clique aqui para criar um."
                    >
                        <Text style={[styles.textoLink, themeTextStyle]}>Não possuo cadastro</Text>
                    </TouchableOpacity>
                    {/* <CheckBox
                        title="Salvar login"
                        checkedIcon="check"
                        uncheckedIcon="square-o"
                        checkedColor="#0050AF"
                        uncheckedColor="red"
                        checked={isSelected}
                        onPress={() => setSelected(!isSelected)}
                        center
                        textStyle={styles.checkBox}
                        containerStyle={styles.checkBox}
                    /> */}
                </Animatable.View>
                <View style={styles.containerBotao}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleLogin()}
                        accessibilityLabel="Botão de login."
                        accessibilityHint="Clique aqui para entrar."
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
