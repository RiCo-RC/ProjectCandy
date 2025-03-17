import { View, Text, Modal, TextInput } from "react-native";

import styles from "@styles/main";

import CustomButtonText from "@components/CustomButtonText";

const HomeModal = ({
  handleValidate,
  handleFormModalClose,
  isModalFormVisible,
  error,
  isLoading,
  username,
  setUsername,
}) => {
  return (
    <Modal visible={isModalFormVisible} animationType="slide" transparent>
      <View style={styles.modalViewBase}>
        <View
          style={[
            styles.modalViewContent,
            styles.modalViewHalfContent,
            styles.homeScreenModalViewHalfContent,
          ]}
        >
          <Text style={styles.modalTitle}>Start a game</Text>
          <TextInput
            autoCapitalize="username"
            autoFocus={true}
            clearTextOnFocus={true}
            cursorColor={styles.modalInputCursorColor}
            inputMode="text"
            keyboardType="numeric"
            maxLength={100}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor={styles.modalInputPlaceholderTextColor}
            textAlign="left"
            textContentType="nickname" //for IOS
            style={styles.modalInput}
            value={username}
          />
          {error && (
            <Text style={[styles.errorTextBase, styles.modalErrorText]}>
              {error}
            </Text>
          )}
          <CustomButtonText
            type="primary"
            onPress={handleValidate}
            disabled={isLoading}
            buttonStyle={[styles.modalButtonBase]}
            textStyle={[styles.modalButtonText]}
            text={isLoading ? "Loading..." : "Start the game!"}
          />
          <CustomButtonText
            type="secondary"
            onPress={handleFormModalClose}
            disabled={isLoading}
            buttonStyle={[styles.modalButtonBase]}
            textStyle={[styles.modalButtonText]}
            text={isLoading ? "Loading..." : "I've changed my mind!"}
          />
        </View>
      </View>
    </Modal>
  );
};

export default HomeModal;
