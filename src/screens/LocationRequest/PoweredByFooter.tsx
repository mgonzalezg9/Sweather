import {
  View as DefaultView,
  Image,
  ImageSourcePropType,
  StyleSheet
} from "react-native";

import { Text } from "@/components/text/Text";
import i18n from "@/i18n";

interface PoweredByFooterProps {
  image: ImageSourcePropType;
}

const PoweredByFooter: React.FC<PoweredByFooterProps> = ({ image }) => (
  <DefaultView style={styles.poweredContainer}>
    <Text style={styles.poweredText}>{i18n.t("poweredBy")}:</Text>
    <Image source={image} style={styles.poweredImage} resizeMode="contain" />
  </DefaultView>
);

const styles = StyleSheet.create({
  poweredContainer: {
    flexDirection: "row",
    alignItems: "center",
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
