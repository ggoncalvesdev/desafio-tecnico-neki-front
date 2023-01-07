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
        justifyContent: "space-between",
    },
    textTitle: {
        marginTop: 40,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        marginTop: 40,
        marginLeft: 20,
        fontSize: 20,
    },
    exit: {
        margin: 20,
        flexDirection: "row",
    },
    exitText: {
        fontSize: 20,
        marginTop: 1,
        marginLeft: 15,
    },
    InfoApp: {
        marginBottom: 50,
        alignItems: "center",
    },
    imgLogo: {
        width: 350,
        height: 350,
        top: 140,
    },
    App: {
        fontSize: 20,
    },
    Version: {
        fontSize: 15,
    },
});
