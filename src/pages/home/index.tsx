import React, { useContext, useEffect, useState } from "react";
import {
    FlatList,
    RefreshControl,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { Alerta } from "../../components/alert";
import { DataContext } from "../../context/DataContext";
import { Api } from "../../services/Api/api";
import { styles } from "./styles";

export function Home({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const [dataSkillUser, setDataSkillUser] = useState([]);
    /* const [level, setLevel] = useState(0); */
    const [knowledgeLevel, setKnowledgeLevel] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const { dadosUsuarioLogin } = useContext(DataContext);

    /* console.log(JSON.stringify("retorno api: " + JSON.stringify(dataSkillUser))); */
    useEffect(() => {
        /*    dataSkillUser.map((knowledgeLevel) => {
            console.log("knowledgeLevel: " + knowledgeLevel.knowledgeLevel);
            setKnowledgeLevel(knowledgeLevel.knowledgeLevel);
        }); */
        loadSkillUser();
    }, []);

    const loadSkillUser = async () => {
        try {
            const response = await Api.get(`/userSkills`, {
                headers: {
                    Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
                },
            }).then((resp) => {
                setDataSkillUser(resp.data);
                setRefreshing(false);
            });
        } catch (e) {
            console.error("Erro ao recuperar os dados do servidor.", e);
            alert("Erro ao recuperar os dados do servidor, por favor, tente mais tarde.");
        }
    };
    const onRefresh = () => {
        setRefreshing(true);
        setDataSkillUser([]);
        loadSkillUser();
    };

    const deleteSkill = async (id: number) => {
        await Api.delete(`/userSkills/${id}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
        }).then((res) => {
            Alerta("Skill excluida!", "você excluiu a skill do seu histórico!");
            navigation.navigate("Home");
        });
    };
    const increaseLevel = () => {
        if (knowledgeLevel < 10) {
            setKnowledgeLevel(knowledgeLevel + 1);
        }
    };
    const decreaseLevel = () => {
        if (knowledgeLevel > 0) {
            setKnowledgeLevel(knowledgeLevel - 1);
        }
    };

    const Item = ({ item, idUser }) => (
        <>
            {idUser != item.user.id ? (
                <></>
            ) : (
                <View style={[styles.containerSkill, themeContainerStyle]}>
                    <Text style={[styles.name, themeTextStyle]}>{item?.skill.name}</Text>
                    <Text style={[styles.version, themeTextStyle]}>Versão: {item?.skill.version}</Text>
                    <View style={[styles.containerInfoSkill]}>
                        {(item?.skill?.imageUrl != null && (
                            <ImageBackground
                                source={{ uri: item?.skill?.imageUrl }}
                                style={styles.imgSkill}
                                imageStyle={{ borderRadius: 10 }}
                            ></ImageBackground>
                        )) || (
                            <ImageBackground
                                source={require("../../assets/img/erro.png")}
                                style={styles.imgSkill}
                                imageStyle={{ borderRadius: 10 }}
                            ></ImageBackground>
                        )}
                        <Text style={styles.description}>{item?.skill?.description}</Text>
                    </View>
                    <Text style={styles.level}>Level: {item?.knowledgeLevel}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => decreaseLevel()}>
                            <Text style={styles.button}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => increaseLevel()}>
                            <Text style={styles.button}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonAtualizarContainer}>
                        <TouchableOpacity>
                            <Text style={styles.buttonAtualizar}>Atualizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteSkill(item.id)}>
                            <Text style={styles.buttonAtualizar}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
    const renderItem = ({ item }) => {
        return <Item item={item} idUser={dadosUsuarioLogin.id} />;
    };
    return (
        <View style={[styles.container, themeContainerStyle]}>
            <SafeAreaView>
                <Text style={[styles.history, themeTextStyle]}>Minhas Skills</Text>
                <FlatList
                    style={styles.flatList}
                    data={dataSkillUser}
                    renderItem={renderItem}
                    keyExtractor={(item) => item?.id}
                    numColumns={1}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
            </SafeAreaView>
        </View>
    );
}
