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
    lightThemeDescription: {
        color: "#212F44",
    },
    darkThemeDescription: {
        color: "#fff",
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
        marginBottom: 50,
        width: 100,
        height: 100,
        left: 10,
        top: 10,
    },
    description: {
        textAlign: "justify",
        marginBottom: 40,
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
    buttonAtualizarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginRight: 15,
        marginBottom: 10,
    },
    level: {
        textAlign: "center",
        width: 220,
        fontSize: 18,
        borderRadius: 10,
        marginBottom: 15,
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
