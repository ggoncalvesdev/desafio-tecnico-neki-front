import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 100,
        height: 58,
        width: 58,
        borderRadius: 23,
        backgroundColor: "#2a8894",
        transform: [{ rotate: "45deg" }],
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImageIconStyle: {
        backgroundColor: "#2a8894",
        width: 25,
        height: 25,
        alignContent: "center",
        alignItems: "center",
        transform: [{ rotate: "45deg" }],
    },
});
