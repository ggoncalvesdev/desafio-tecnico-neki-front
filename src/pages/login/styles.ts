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
    containerTitulo: {
        alignItems: "center",
    },
    containerImput: {
        paddingHorizontal: 40,
        bottom: 140,
    },
    titulo: {
        textAlign: "center",
        color: "#212F44",
        fontSize: 39,
        fontWeight: "bold",
    },
    subTitulo: {
        textAlign: "center",
        fontSize: 16,
        color: "#212F44",
    },
    input: {
        backgroundColor: "#ffff",
        paddingVertical: "4%",
        marginBottom: "8%",
        borderRadius: 15,
        paddingLeft: "10%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textoLink: {
        fontSize: 15,
        fontWeight: "bold",
    },
    containerBotao: {
        justifyContent: "center",
    },
    botao: {
        alignSelf: "center",
        marginBottom: "2%",
    },
    containerTextoBotao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },
    setaBotao: {
        marginTop: 8,
        width: 25,
        height: 25,
    },
    textoBotao: {
        marginRight: 8,
        fontSize: 30,
    },
});
