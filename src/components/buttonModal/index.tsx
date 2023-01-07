import React from "react";
import { View, TouchableOpacity, ImageBackground, Modal } from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import { ActionModal } from "../actionModal/ActionModal";

export function AddButton() {
    const [visibalModal, setVisibalModal] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setVisibalModal(true)}
                accessibilityLabel="Botão adicionar."
                accessibilityHint="Quer adicionar uma skill? Clique aqui."
            >
                <ImageBackground
                    source={require("../../assets/icons/mais.png")}
                    style={styles.buttonImageIconStyle}
                ></ImageBackground>
                <Modal
                    visible={visibalModal}
                    transparent={true}
                    onRequestClose={() => setVisibalModal(false)}
                    animationType="fade"
                >
                    <ActionModal handleClose={() => setVisibalModal(false)} />
                </Modal>
            </TouchableOpacity>
        </View>
    );
}
