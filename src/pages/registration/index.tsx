import React, { useState } from "react";

import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";

import { styles } from "./styles";
import { Alerta } from "../../components/alert";
import Seta from "../../assets/icons/seta-direita.png";
import authService, { createUser } from "../../services/Api/Request/authService";

export function Registration({ navigation }) {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [validPass, setValidPass] = useState(null);
    const [hidePass, setHidePass] = useState(true);

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    function salvar() {
        let data: createUser = {
            login: login,
            password: password,
        };
        console.log(data);

        if (password == validPass) {
            authService
                .create(data)
                .then((res) => {
                    console.log(res.data);
                    Alerta("Parabéns!", "você foi cadastrado com sucesso!");
                    navigation.navigate("Login");
                })
                .catch((err) => {
                    Alerta("Oops!", " Este e-mail já está em uso, verique-o ou recupere sua senha");
                    console.log(err);
                });
        } else {
            Alerta("Oops!", "As senhas não coincidem");
        }
    }

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView>
                <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerTitulo}>
                    <Text style={[styles.titulo, themeTextStyle]}>Agile</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerImput}>
                    <TextInput
                        placeholder="Login"
                        style={styles.input}
                        onChangeText={(value) => {
                            setLogin(value);
                        }}
                        accessibilityHint="Insira seu Login."
                    />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={hidePass}
                        style={styles.input}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                        accessibilityHint="Insira uma senha que tenha seis caracteres."
                    ></TextInput>

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
                    <TextInput
                        placeholder="Validar senha"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(value) => {
                            setValidPass(value);
                        }}
                        accessibilityHint="Insira sua senha novamente para valida-la."
                    />
                </Animatable.View>
                <View style={styles.containerBotao}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            salvar();
                        }}
                        accessibilityLabel="Botão cadastro."
                        accessibilityHint="Clique aqui para finalizar o seu cadastro."
                    >
                        <View style={styles.containerTextoBotao}>
                            <Text style={[styles.textoBotao, themeTextStyle]}>Cadastrar</Text>
                            <Image source={Seta} style={[styles.setaBotao, themeContainerStyle]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}
