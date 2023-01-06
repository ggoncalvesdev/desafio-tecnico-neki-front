import { Alert } from "react-native";

export const Alerta = (title, mensagem) =>
    Alert.alert(title, mensagem, [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
