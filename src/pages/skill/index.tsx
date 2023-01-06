import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Api } from "../../services/Api/api";
import { styles } from "./styles";

export function PageSkill({ route, navigation }) {
    const token = route.params.token;
    const idUser = route.params.idUser;
    const idSkill = route.params?.idSkill;
    const imageSkill = route.params.imageUrl;
    const nameSkill = route.params.nameSkill;
    const versionSkill = route.params.version;
    const descriptionSkill = route.params.description;

    /* console.log(JSON.stringify("retorno api: " + JSON.stringify(route.params.idUser))); */

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const postSkill = async () => {
        try {
            const postSkill = await Api.post(
                `/userSkills`,
                {
                    user: {
                        id: idUser,
                    },
                    skill: {
                        id: idSkill,
                    },
                    knowledgeLevel: 0,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            ).then((resp) => {
                console.log(JSON.stringify(resp.data));
                console.log(resp.status);
                if (resp.status === 201) {
                    console.info("Livro cadastrado no banco de dados.");
                    alert("Parabéns, seu livro foi cadastrado com sucesso!");
                }
            });
        } catch {
            console.log(Error);
        }
    };

    return (
        <>
            <SafeAreaView style={[styles.container, themeContainerStyle]}>
                <View style={styles.livro}>
                    <Image style={styles.imgLivros} source={{ uri: imageSkill }}></Image>
                    <View>
                        <View style={styles.textLivro}>
                            <Text style={[styles.textoLivro, themeTextStyle]}>{nameSkill}</Text>
                            <Text style={[styles.textoLivro, themeTextStyle]}>Versão: {versionSkill}</Text>
                            <Text style={[styles.textoLivro]}>{descriptionSkill}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.displayButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        style={styles.containerButton}
                        accessibilityLabel="Botão cancelar."
                        accessibilityHint="Não é a skill que estava procurando? Clique aqui para cancelar."
                    >
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home"), postSkill();
                        }}
                        style={styles.containerButton}
                        accessibilityLabel="Botão cadastrar."
                        accessibilityHint="Essa é a skill que estava procurando? Clique aqui para adicioná-lo na sua lista."
                    >
                        <Text style={styles.button}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}
