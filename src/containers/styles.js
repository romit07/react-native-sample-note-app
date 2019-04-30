import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  mainHeading: {
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 30
  },
  doneContainer: {
    position: "absolute",
    right: 16,
    top: 82
  },
  doneText: {
    color: "red",
    fontSize: 16
  },
  navigationHeader: {
    position: "absolute",
    top: 0,
    height: 70,
    width: "100%",
    zIndex: 1
  },
  noteComponent: {
    height: 76,
    paddingTop: 8,
    paddingBottom: 0,
    justifyContent: "space-around"
  },
  divider: {
    position: "absolute",
    bottom: 0,
    height: 1,
    backgroundColor: "grey",
    left: 0,
    right: 0
  },
  newNoteImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    resizeMode: "contain"
  },
  createNoteBotton: {
    position: "absolute",
    right: 16,
    bottom: 32,
    height: 48,
    width: 48
  },
  backButtonImage: {
    tintColor: "black",
    height: 30,
    width: 30,
    resizeMode: "cover"
  },
  trashButtonImage: {
    tintColor: "black",
    height: 30,
    width: 25,
    resizeMode: "cover"
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 12,
    height: 30,
    width: 30,
    zIndex: 10
  },
  trashButton: {
    position: "absolute",
    top: 48,
    right: 12,
    height: 30,
    width: 30,
    zIndex: 10
  },
  title: {
    fontSize: 16,
    marginRight: 16,
    fontWeight: "bold"
  },
  subHeading: {
    marginRight: 16
  },
  geolocation: {
    color: "grey"
  },
  titleView: {
    flexDirection: "row",
    marginLeft: 16,
    height: 48,
    alignItems: "center"
  }
});
export default styles;
