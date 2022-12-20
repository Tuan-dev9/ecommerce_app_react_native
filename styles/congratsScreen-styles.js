import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  textSuccess: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 80,
    marginBottom: 20,
  },
  paragraph: {
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#606060",
  },
  logo: {
    marginTop: 10,
    width: 260,
    height: 260,
    marginHorizontal: 35,
  },
  icon__success: {
    marginHorizontal: 140,
    marginVertical: 20,
    fontSize: 24,
    color: "#fff",
    borderWidth: 1,
    backgroundColor: "#27AE60",
    width: 42,
    height: 42,
    borderRadius: 20,
    textAlignVertical: "center",
    textAlign: "center",
    borderColor: "#27AE60",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#242424",
    borderRadius: 10,
    paddingVertical: 15,
    width: "70%",
    marginLeft: "15%",
    marginVertical: 10,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
  },
});