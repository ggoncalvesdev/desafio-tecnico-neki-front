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
import filter from "lodash.filter";
import { DataContext } from "../../context/DataContext";
import { Api } from "../../services/Api/api";
import { SkillsType } from "../../models/SkillsType";

export function ActionModal({ navigation }) {
    const [query, setQuery] = useState("");
    const [fullData, setFullData] = useState([]);

    const [input, setInput] = useState("");
    const [skill, setSkill] = useState<SkillsType[]>([]);

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
                    setFullData(resp.data);
                    /* console.log(JSON.stringify("retorno api: " + JSON.stringify(resp.data))); */
                });
            } catch (e) {
                if (e.resp && e.resp.status === 404) {
                    alert("Erro ao recuperar os dados do servidor, por favor, tente mais tarde.");
                    console.error("Erro ao recuperar os dados do servidor.", e);
                }
            }
        };
        loadSkill();
    }, []);
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
                        {item?.imageUrl != null ? (
                            <Image style={styles.cardSkillImage} source={{ uri: item?.imageUrl }} />
                        ) : (
                            <Image style={styles.cardSkillImage} source={require("../../assets/img/user.jpg")} />
                        )}
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
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const handleSearch = (text) => {
        const formattedQuery = text;
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setSkill(filteredData);
        setQuery(text);
    };

    const contains = ({ name, version }, query) => {
        if (name.includes(query) || version.includes(query)) {
            return true;
        }
        return false;
    };
    return (
        <>
            <View style={styles.containerBusca}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={(queryText) => handleSearch(queryText)}
                    placeholder="Buscar Produtos"
                    placeholderTextColor={"#C7C7C7"}
                    style={{
                        backgroundColor: "#ffff",
                        paddingHorizontal: 10,
                        padding: 6,
                        borderRadius: 2,
                    }}
                />
            </View>

            <FlatList
                style={[styles.container, themeContainerStyle]}
                data={skill}
                renderItem={CardSkill}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </>
    );
}
