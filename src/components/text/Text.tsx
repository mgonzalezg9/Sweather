import { Text as DefaultText } from "react-native";
import { ThemeProps, useThemeColor } from "../Themed";

export type TextProps = ThemeProps & DefaultText["props"];

export default function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}
