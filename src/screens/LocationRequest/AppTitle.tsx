import AppLogo from "@/assets/images/banner.png";
import { Text } from "@/components";
import i18n from "@/i18n";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

const AppTitle = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={AppLogo} resizeMode="contain" />
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
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default AppTitle;
