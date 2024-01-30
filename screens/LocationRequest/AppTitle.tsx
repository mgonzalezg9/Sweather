import { StyleSheet, Image } from "react-native";
import AppLogo from "../../assets/images/banner.png";
import { View } from "../../components/view/View";
import { Text } from "../../components/text/Text";
import { i18n } from "../../App";

const AppTitle = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AppLogo} />
      <Text style={styles.title}>{i18n.t("appTitle")}</Text>
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
