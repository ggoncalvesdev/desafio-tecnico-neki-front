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
    containerImput: {
        marginTop: 15,
        paddingHorizontal: 40,
    },
    containerBotao: {
        justifyContent: "center",
        width: "100%",
        top: 70,
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
    containerLogo: {
        marginTop: "3%",
        paddingHorizontal: "10%",
    },
    containerTitulo: {
        marginVertical: "12%",
        alignItems: "center",
    },
    containerHeader: {
        marginTop: "14%",
        marginBotton: "8%",
        paddingStart: "5%",
    },
    titulo: {
        textAlign: "center",
        fontSize: 70,
        fontWeight: "bold",
    },
    subTitulo: {
        textAlign: "center",
        fontSize: 16,
    },
    input: {
        backgroundColor: "#ffff",
        paddingVertical: "4%",
        marginBottom: "6%",
        borderRadius: 15,
        padding: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    eyevisible: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        right: 55,
        bottom: 110,
        width: 50,
    },
    textoLink: {
        color: "#211F1F",
        fontSize: 15,
        fontWeight: "bold",
    },
});
