import OpenweatherBanner from "@/assets/images/openweather.png";
import {
  View as DefaultView,
  SafeAreaView,
  StyleSheet
} from "react-native";
import AppTitle from "./AppTitle";
import LocationRequestBody from "./LocationRequestBody";
import PoweredByFooter from "./PoweredByFooter";

export default function LocationRequestScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <DefaultView style={styles.bodyContent}>
        <AppTitle />
        <LocationRequestBody />
      </DefaultView>
      <PoweredByFooter image={OpenweatherBanner} style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 20,
    height: "100%",
  },
  bodyContent: {
    gap: 20,
    marginTop: '10%'
  },
  footer: {
    width: '100%',
  }
});
