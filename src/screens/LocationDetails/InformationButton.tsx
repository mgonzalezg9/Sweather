import { Info } from "@/components/icons/Info";
import Colors from "@/constants/Colors";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const INFO_BUTTON_SIZE = 40;

interface InformationButtonProps {
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

export const InformationButton = ({
  onClick,
  style,
}: InformationButtonProps) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <Info
      lightColor={Colors.palette.black}
      lightStroke={Colors.palette.black}
      darkColor={Colors.palette.black}
      darkStroke={Colors.palette.black}
      width={INFO_BUTTON_SIZE}
      height={INFO_BUTTON_SIZE}
    />
  </TouchableOpacity>
);
