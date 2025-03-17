import { View, Text, Modal } from "react-native";

import styles from "@styles/main";

import CustomButtonText from "@components/CustomButtonText";

const GameModal = ({
  isModalFormVisible,
  isLoading,
  handleResume,
  handleGiveUp,
}) => {

  return (
    <Modal visible={isModalFormVisible} animationType="slide">
      <View style={styles.modalViewBase}>
        <View
          style={[
            styles.modalViewContent,
            styles.modalViewHalfContent,
            styles.homeScreenModalViewHalfContent,
          ]}
        >
          <Text style={styles.modalTitle}>Paused game</Text>
          <CustomButtonText
            type="primary"
            onPress={handleResume}
            disabled={isLoading}
            buttonStyle={[styles.modalButtonBase]}
            textStyle={[styles.modalButtonText]}
            text={isLoading ? "Loading..." : "Resuming the game"}
          />
          <CustomButtonText
            type="secondary"
            onPress={handleGiveUp}
            disabled={isLoading}
            buttonStyle={[styles.modalButtonBase]}
            textStyle={[styles.modalButtonText]}
            text={isLoading ? "Loading..." : "Giving up the game"}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GameModal;
