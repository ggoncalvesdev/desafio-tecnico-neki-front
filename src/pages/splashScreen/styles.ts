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
    containerBotao: {
        justifyContent: "center",
        alignItems: "center",
        top: 180,
    },
    containerTextoBotao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },
    textoBotao: {
        marginRight: 8,
        fontSize: 30,
    },
    setaBotao: {
        marginTop: 8,
        width: 25,
        height: 25,
    },
});
