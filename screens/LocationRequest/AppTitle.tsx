import { StyleSheet, Image, View } from "react-native";
import AppLogo from "../../assets/images/icon.png";
import { Text } from "../../components/Themed";

const AppTitle = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AppLogo} />
      <Text style={styles.title}>sweather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default AppTitle;
