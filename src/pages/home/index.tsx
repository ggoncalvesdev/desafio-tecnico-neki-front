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
import { styles } from "./styles";
import { Api } from "../../services/Api/api";
import { Alerta } from "../../components/alert";
import { DataContext } from "../../context/DataContext";

export function Home({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeDescriptionStyle = colorScheme === "light" ? styles.lightThemeDescription : styles.darkThemeDescription;
    const themeContainerStyle = colorScheme === "light" ? styles.lightThemeContainer : styles.darkThemeContainer;

    const [refreshing, setRefreshing] = useState(false);
    const [dataSkillUser, setDataSkillUser] = useState([]);

    const { dadosUsuarioLogin } = useContext(DataContext);

    /* console.log(JSON.stringify("retorno api: " + JSON.stringify(dataSkillUser))); */
    useEffect(() => {
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
                        <Text style={[styles.description, themeDescriptionStyle]}>{item?.skill?.description}</Text>
                    </View>
                    <View style={styles.buttonAtualizarContainer}>
                        <Text style={[styles.level, themeTextStyle]}>
                            Nível de conhecimento: {item?.knowledgeLevel}
                        </Text>
                        <TouchableOpacity onPress={() => deleteSkill(item.id)}>
                            <Text style={[styles.buttonAtualizar, themeDescriptionStyle]}>Excluir</Text>
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
