import React, { useState, useContext } from "react";

import * as Animatable from "react-native-animatable";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";

import Seta from "../../assets/icons/seta-direita.png";

import { styles } from "./styles";
import { Alerta } from "../../components/alert";
import { DataContext } from "../../context/DataContext";
import authService from "../../services/Api/Request/authService";
import { storeLocalData } from "../../services/LocalStorageService";
import { Logo } from "../../components/logo";

export function Login({ navigation }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
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

                navigation.navigate("SplashScreen");
            }
        } catch (error) {
            Alerta("Oops!", "Login ou senha errados");
        }
    };

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Logo />
            <SafeAreaView>
                <Animatable.View
                    animation={"fadeInLeft"}
                    delay={500}
                    style={[styles.containerTitulo, themeContainerStyle]}
                ></Animatable.View>
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
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        accessibilityLabel="Insira sua senha aqui."
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Cadastro")}
                        accessibilityLabel="Não tem um cadastro? Clique aqui para criar um."
                    >
                        <Text style={[styles.textoLink, themeTextStyle]}>Não possuo cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("RecuperarSenha")}
                        accessibilityLabel="Esqueceu seu login? Clique aqui para recuperar-lo"
                    >
                        <Text style={[styles.textoLink, themeTextStyle]}>Esqueci meu login</Text>
                    </TouchableOpacity>
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
