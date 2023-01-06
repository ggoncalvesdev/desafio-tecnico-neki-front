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
    historico: {
        flex: 0.2,
        marginLeft: 20,
        justifyContent: "flex-start",
        paddingTop: 20,
    },
    history: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#22354F",
    },
    livro: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        justifyContent: "center",
        alignItems: "center",
    },
    imgLivros: {
        width: 380,
        height: 400,
        borderRadius: 25,
        marginTop: 25,
    },
    textLivro: {
        padding: 20,
        alignItems: "center",
    },
    textoLivro: {
        fontSize: 15,
        color: "#22354F",
        marginTop: 10,
    },
    displayButton: {
        flex: 2,
        flexDirection: "row",
    },
    containerButton: {
        backgroundColor: "#4FB889",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 60,
        marginVertical: 40,
        borderRadius: 30,
    },
    button: {
        textAlign: "center",
        paddingTop: 11,
        width: 95,
        height: 45,
        color: "#fff",
        fontWeight: "bold",
    },
});
