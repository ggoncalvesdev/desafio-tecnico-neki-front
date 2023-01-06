import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    lightThemeContainer: {
        backgroundColor: "#fff",
        tintColor: "#0050AF",
    },
    darkThemeContainer: {
        backgroundColor: "#0050AF",
        tintColor: "#fff",
    },
    lightThemeText: {
        color: "#0050AF",
    },
    darkThemeText: {
        color: "#fff",
    },
    status: {
        backgroundColor: "red",
        /*   marginTop: 2,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: "bold", */
        color: "#252525",
    },
    infos: {
        /* marginTop: 10, */
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    infotext: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#212F44",
    },
    history: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#212F44",
    },
    containerImg: {
        marginTop: 45,
        alignSelf: "center",
    },
    bordaImg: {
        borderColor: "#212F44",
        borderWidth: 1,
        borderRadius: 100,
        alignItems: "center",
    },
    input: {
        alignSelf: "center",
        width: 350,
        backgroundColor: "#ffff",
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 50,
        marginBottom: 0,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    identificacao: {
        marginTop: 35,
        padding: 0,
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    nome: {
        fontSize: 23,
        fontWeight: "bold",
        padding: 0,
        color: "#212F44",
    },
    userName: {
        color: "#212F44",
        marginBottom: 30,
    },
    livrohist: {
        backgroundColor: "#2a88949b",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
    },
    imgLivros: {
        width: 140,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },

    cardSkills: {
        /* flexDirection: "row", */
        /*   alignSelf: "flex-start", */
        /*  textAlign: "center", */
        justifyContent: "center",
        width: 190,
        height: 190,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 50,
        borderColor: "#212F44",
        borderWidth: 1,
        borderRadius: 20,
    },
    /* header: {
        flexDirection: "row",
    }, */
    cardSkillImage: {
        backgroundColor: "#fff",
        alignSelf: "center",
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 20,
    },
    /*     test: {
        justifyContent: "space-between",
    }, */
    cardSkillName: {
        /*     marginLeft: 100, */
        textAlign: "center",
        fontSize: 16,
        lineHeight: 35,
        fontWeight: "bold",
    },
    cardVersion: {
        textAlign: "center",
        marginBottom: 10,
        /*    marginLeft: 10, */
    },
    /*    cardDescription: {
        alignSelf: "center",
        marginLeft: 10,
        width: 360,
        lineHeight: 25,
        fontSize: 14,
        color: "#BBBBBB",
    }, */
    imagens: {
        justifyContent: "space-around",
        marginBottom: 60,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 150,
    },
    imgperfil: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 85,
        marginLeft: 10,
        marginRight: 10,
    },
    actionButton: {
        zIndex: 99,
        flexDirection: "row",
        backgroundColor: "#2a8894",
        borderRadius: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0, 0.2)",

        shadowColor: "rgba(0,0,0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    actionText: {
        textAlign: "center",
        alignSelf: "center",
        marginLeft: 20,
    },
    imgButton: {
        width: 50,
        height: 50,
    },
});
