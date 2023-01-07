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
    skill: {
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
    imgSkill: {
        width: 280,
        height: 300,
        borderRadius: 25,
        marginTop: 70,
    },
    textSkillContainer: {
        padding: 20,
        alignItems: "center",
    },
    name: {
        fontSize: 30,
        color: "#22354F",
        marginTop: 10,
        marginBottom: 3,
    },
    version: {
        marginBottom: 10,
        fontSize: 18,
    },
    description: {
        fontSize: 15,
        textAlign: "justify",
    },
    displayButton: {
        flexDirection: "row",
        alignSelf: "center",
        top: 100,
    },
    level: {
        alignSelf: "flex-start",
        marginLeft: 35,
        fontSize: 20,
        top: 30,
        fontWeight: "bold",
    },
    buttonContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginRight: 300,
        top: 40,
        left: 10,
    },
    buttonUpdate: {
        backgroundColor: "#4FB889",
        textAlign: "center",
        width: 35,
        fontSize: 25,
        borderRadius: 50,
        marginBottom: 10,
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
