import { TextInput as DefaultTextInput } from "react-native";
import { ThemeProps, useThemeColor } from "../Themed";

export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export default function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const textLightColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textLight"
  );
  const tintColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "tint"
  );

  const defaultStyle = {
    backgroundColor,
    color: textColor,
    borderColor: textColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  };

  return (
    <DefaultTextInput
      style={[defaultStyle, style]}
      selectionColor={tintColor}
      placeholderTextColor={textLightColor}
      {...otherProps}
    />
  );
}
