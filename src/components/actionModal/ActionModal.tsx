import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native-animatable";
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    useColorScheme,
    ImageBackground,
    TextInput,
} from "react-native";

import { styles } from "./styles";
import { DataContext } from "../../context/DataContext";
import { Api } from "../../services/Api/api";
import { SkillsType } from "../../models/SkillsType";

export function ActionModal({ navigation }) {
    /* const navigation = useNavigation(); */
    const [skill, setSkill] = useState<SkillsType[]>([]);
    const [input, setInput] = useState("");

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const { dadosUsuarioLogin } = useContext(DataContext);

    const navigateToPageSkill = (
        idSkill: number,
        nameSkill: string,
        version: string,
        description: string,
        imageUrl: string,
        token: string,
        idUser: number
    ) => {
        navigation.navigate("PageSkill", {
            idSkill: idSkill,
            nameSkill: nameSkill,
            version: version,
            description: description,
            imageUrl: imageUrl,
            token: token,
            idUser: idUser,
        });
    };

    useEffect(() => {
        const loadSkill = async () => {
            try {
                const response = await Api.get(`/skills`, {
                    headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                }).then((resp) => {
                    setSkill(resp.data);
                    /*  resp.data.map((listSkill) => {
                        setSkill(listSkill);
                    }); */
                    /*                     console.log(JSON.stringify("retorno api: " + JSON.stringify(resp.data)));
                     */
                });
            } catch (e) {
                if (e.resp && e.resp.status === 404) {
                    console.info("ISBN não encontrado na base de dados.", e);
                    alert("Desculpe, este livro não foi encontrado na nossa base de dados.");
                } else {
                    console.error("Erro ao recuperar os dados do servidor.", e);
                    alert("Erro ao recuperar os dados do servidor, por favor, tente mais tarde.");
                }
            }
        };
        loadSkill();
    }, []);
    /* const Item = ({ item }) => (
        <View style={styles.livrohist}>
            <Text style={[styles.status, themeTextStyle]}>{item.name}</Text>
            <TouchableOpacity
                onPress={eventoPressionarBotao}
                accessibilityLabel="Card capa do livro."
                accessibilityHint="Quer saber mais detalhes do livro? Clique aqui."
            >
                {(item?.imageUrl != null && (
                    <ImageBackground
                        source={{ uri: item?.imageUrl }}
                        style={styles.imgLivros}
                        imageStyle={{ borderRadius: 25 }}
                    ></ImageBackground>
                )) || (
                    <ImageBackground
                        source={require("../../assets/img/imgButton.png")}
                        style={styles.imgLivros}
                        imageStyle={{ borderRadius: 25 }}
                    ></ImageBackground>
                )}
            </TouchableOpacity>
        </View>
    ); */

    /*     const renderItem = ({ item }) => {
        return <Item item={item} />;
    }; */
    const CardSkill = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    onPress={() =>
                        navigateToPageSkill(
                            item.id,
                            item.name,
                            item.version,
                            item.description,
                            item?.imageUrl,
                            dadosUsuarioLogin?.token,
                            dadosUsuarioLogin?.id
                        )
                    }
                >
                    <View style={styles.cardSkills}>
                        {/* <View style={styles.header}> */}
                        {item?.imageUrl != null ? (
                            <Image style={styles.cardSkillImage} source={{ uri: item?.imageUrl }} />
                        ) : (
                            <Image style={styles.cardSkillImage} source={require("../../assets/img/user.jpg")} />
                        )}
                        {/* <View style={styles.test}> */}
                        {item?.name != null ? (
                            <Text style={[styles.cardSkillName, themeTextStyle]}>{item?.name}</Text>
                        ) : (
                            <Text style={[styles.cardSkillName, themeTextStyle]}>Nome não encontrado.</Text>
                        )}
                        {item?.version != null ? (
                            <Text style={[styles.cardVersion, themeTextStyle]}>Versão: {item.version}</Text>
                        ) : (
                            <Text style={[styles.cardVersion, themeTextStyle]}>Versão não encontrado.</Text>
                        )}
                        {/* </View> */}
                        {/*  </View> */}

                        {/*  {item?.description != null ? (
                            <Text style={[styles.cardDescription, themeTextStyle]}>{item.description}</Text>
                        ) : (
                            <Text style={[styles.cardDescription, themeTextStyle]}>Descrição não encontrado.</Text>
                        )} */}
                    </View>
                </TouchableOpacity>
            </>
        );
    };
    return (
        <FlatList
            style={[styles.container, themeContainerStyle]}
            data={skill}
            renderItem={CardSkill}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
}
