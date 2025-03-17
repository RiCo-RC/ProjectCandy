import { StyleSheet } from "react-native";

import { width, height, BOARD_CELL_SIZE } from "@utils";

const mainStyles = StyleSheet.create({
  //---- GLOBAL: ICON\IMAGE ----\\
  imageBase: {
    height: "100%",
    resizeMode: "contain",
    width: "100%",
  },
  //---- GLOBAL: BUTTON ----\\
  buttonBase: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 10,
    width: width * 0.9,
  },
  buttonPrimary: {
    backgroundColor: "#4682B4",
    borderColor: "#5D3FD3",
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonSecondary: {
    borderColor: "#5D3FD3",
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonTertiary: {},
  errorTextBase: {},
  //---- GLOBAL: ERROR ----\\
  errorTextBase: {},
  //---- GLOBAL: MODAL ----\\
  modalViewBase: {
    alignItems: "center",
    height: height * 1,
    justifyContent: "center",
    width: width * 1,
    backgroundColor: "rgba(27, 31, 59, 0.95)",
  },
  modalViewContent: {
    alignItems: "center",
    gap: 15,
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  modalViewHalfContent: {
    height: "50%",
    width: "50%",
  },
  modalTitle: {
    fontSize: 22,
    color: "white",
  },
  modalInput: {
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#5D3FD3",
    borderRadius: 15,
    color: "#4682B4",
    width: "95%",
  },
  modalInputPlaceholderTextColor: "rgba(255,255,255,0.75)",
  modalErrorText: {
    color: "#FF1493",
  },
  modalButtonBase: {
    width: "95%",
  },
  modalButtonText: {
    color: "white",
  },
  //---- GLOBAL: SCREEN ----\\
  viewBase: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewFull: {
    flex: 1,
    gap: 10,
    height: "100%",
    width: "100%",
  },
  //---- COMPONENT: PROGRESS BAR ----\\
  progressBarView: {
    gap: 10,
    height: 40,
    marginVertical: 10,
    maxWidth: width * 0.95,
    width: width * 0.9,
  },
  progressBarViewAnimated: {
    backgroundColor: "#5D3FD3",
    height: 20,
    maxWidth: width * 0.95,
    width: "0%",
  },
  progressBarTextValue: {
    color: "#C0C0C0",
    fontFamily: "montserrat-regular",
    fontSize: 14,
  },
  //---- SCREEN: GAME ----\\
  gameScreenView: {
    backgroundColor: "#0B0C10",
    justifyContent: "space-around",
  },
  gameScreenHeaderView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: height * 0.2,
    paddingHorizontal: 2,
    width: "100%",
  },
  gameScreenContentView: {
    height: height * 0.6,
    width: width * 1,
  },
  gameScreenActionView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: height * 0.2,
    width: width * 1,
  },
  gameScreenBoardView: {
    backgroundColor: "rgba(27, 31, 59, 0.25)",
    height: "100%",
    width: "100%",
  },
  gameScreenBoardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: width * 0.95,
  },
  gameScreenBoardCellView: {
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    height: BOARD_CELL_SIZE,
    justifyContent: "center",
    margin: 2,
    shadowColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    width: BOARD_CELL_SIZE,
  },
  //-- header:
  gameScreenHeaderTextScore: {
    color: "white",
    fontSize: 15,
  },
  gameScreenHeaderTextLevel: {
    color: "white",
    fontSize: 15,
  },
  gameScreenHeaderTextLife: {
    color: "white",
    fontSize: 15,
  },
  //-- content/board:
  gameScreenTextBoardCell: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  //---- SCREEN: HOME ----\\
  homeScreenView: {
    backgroundColor: "#0B0C10",
    justifyContent: "space-around",
  },
  homeScreenHeaderView: {
    height: height * 0.2,
    paddingHorizontal: 2,
    width: "100%",
  },
  homeScreenContentView: {
    justifyContent: "space-around",
    height: height * 0.6,
    width: width * 1,
  },
  homeScreenLatestScoreView: {
    backgroundColor: "#1B1F3B",
    borderColor: "#5D3FD3",
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: "column",
    gap: 5,
    height: height * 0.2,
    paddinhg: 20,
    position: "relative",
    width: width * 0.85,
  },
  homeScreenActionView: {
    height: height * 0.2,
    width: width * 1,
  },
  homeScreenModalViewHalfContent: {
    height: height * 0.85,
    width: width * 0.85,
  },
  //-- header:
  homeScreenHeaderTitle: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 35,
  },
  homeScreenHeaderVersion: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 20,
  },
  //-- content/score:
  homeScreenLatestScoreTitle: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 22,
  },
  homeScreenLatestScorePoints: {
    color: "white",
    fontSize: 15,
  },
  homeScreenLatestScoreUsername: {
    color: "white",
    fontSize: 15,
  },
  homeScreenLatestScoreDateTime: {
    color: "white",
    fontSize: 15,
  },
  homeScreenLatestScoreNoScore: {
    color: "white",
    fontSize: 15,
  },
  homeScreenLatestScoreButtonIconScore: {
    backgroundColor: "#C0C0C0",
    borderRadius: 25,
    elevation: 5,
    padding: 10,
    position: "absolute",
    right: -20,
    top: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "auto",
  },
  //-- action:
  homeScreenButtonReady: {
    color: "#fff",
  },
  //---- SCREEN: LEADERBOARD ----\\
  leaderboardScreenView: {
    backgroundColor: "#0B0C10",
    justifyContent: "space-around",
  },
  leaderboardScreenHeaderView: {
    height: height * 0.2,
    width: width * 1,
  },
  leaderboardScreenContentView: {
    justifyContent: "space-around",
    height: height * 0.6,
    width: width * 1,
  },
  leaderboardScreenActionView: {
    height: height * 0.2,
    width: width * 1,
  },
  //-- header:
  leaderboardScreenHeaderTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: "roboto-regular",
    fontWeight: "bold",
  },
  //-- content:
  leaderboardScreenButtonRow: {
    justifyContent: "space-between",
    padding: 10,
    width: width * 0.95,
  },
  leaderboardScreenTextRank: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    width: 30,
  },
  leaderboardScreenTextUser: {
    color: "white",
    flex: 1,
    fontSize: 18,
  },
  leaderboardScreenTextScore: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  leaderboardScreenTextScoreNoScore: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  //-- action:
  leaderboardScreenButtonBack: {
    color: "#fff",
  },
  //---- SCREEN: SPLASH ----\\
  splashScreenView: {
    backgroundColor: "#0B0C10",
  },
  splashScreenIconLoading: {
    height: height * 0.25,
    width: width * 0.9,
  },
  splashScreenTextLoading: {
    color: "#FF4500",
    fontFamily: "roboto-regular",
    fontSize: 18,
    fontStyle: "italic",
  },
  //---- ----\\
});

export default mainStyles;
