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
    container: {
        flex: 1,
    },
    flatList: {
        marginBottom: 100,
    },
    history: {
        marginTop: 60,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#212F44",
    },
    containerSkill: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
    },

    containerInfoSkill: {
        flexDirection: "row",
    },
    imgSkill: {
        width: 100,
        height: 100,
        left: 10,
        top: 30,
    },
    description: {
        textAlign: "justify",
        width: 250,
        top: 20,
        left: 20,
        fontSize: 15,
    },
    name: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    version: {
        textAlign: "center",
        fontWeight: "bold",
    },
    level: {
        alignSelf: "flex-start",
        marginLeft: 25,
        fontSize: 20,
        top: 80,
        fontWeight: "bold",
    },
    buttonContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginRight: 300,
        top: 90,
        left: 10,
    },
    button: {
        backgroundColor: "#4FB889",
        textAlign: "center",
        width: 35,
        fontSize: 25,
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonAtualizarContainer: {
        alignItems: "flex-end",
        marginRight: 15,
    },
    buttonAtualizar: {
        backgroundColor: "#4FB889",
        textAlign: "center",
        width: 120,
        fontSize: 25,
        borderRadius: 10,
        marginBottom: 10,
    },
});
