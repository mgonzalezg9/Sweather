import { Text } from "@/components";
import i18n from "@/i18n";
import {
  View as DefaultView,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface PoweredByFooterProps {
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const PoweredByFooter: React.FC<PoweredByFooterProps> = ({ image, style }) => (
  <DefaultView style={[styles.poweredContainer, style]}>
    <Text style={styles.poweredText}>{i18n.t("poweredBy")}:</Text>
    <Image source={image} style={styles.poweredImage} resizeMode="contain" />
  </DefaultView>
);

const styles = StyleSheet.create({
  poweredContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  poweredText: {
    fontSize: 18,
  },
  poweredImage: {
    height: 100,
    width: 100,
    marginLeft: 15,
  },
});

export default PoweredByFooter;
