import { View as DefaultView } from "react-native";
import { ThemeProps, useThemeColor } from "../Themed";

type ViewProps = ThemeProps & DefaultView["props"];

export default function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
