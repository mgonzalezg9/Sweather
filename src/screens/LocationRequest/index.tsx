import OpenweatherBanner from "@/assets/images/openweather.png";
import { View } from "@/components/view/View";
import {
  View as DefaultView,
  StyleSheet
} from "react-native";
import AppTitle from "./AppTitle";
import LocationRequestBody from "./LocationRequestBody";
import PoweredByFooter from "./PoweredByFooter";

export default function LocationRequestScreen() {
  return (
    <View style={styles.container}>
      <DefaultView style={styles.locationInput}>
        <AppTitle />
        <LocationRequestBody />
      </DefaultView>
      <PoweredByFooter image={OpenweatherBanner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  locationInput: {
    width: "100%",
    marginLeft: 40,
    marginRight: 40,
  }
});
