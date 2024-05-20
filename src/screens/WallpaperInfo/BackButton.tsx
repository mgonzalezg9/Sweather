import { ArrowLeft } from "@/components/icons/ArrowLeft";
import Colors from "@/constants/Colors";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const BACK_BUTTON_SIZE = 30;

interface BackButtonProps {
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BackButton = ({ onClick, style }: BackButtonProps) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <ArrowLeft
      lightColor={Colors.palette.black}
      lightStroke={Colors.palette.black}
      darkColor={Colors.palette.black}
      darkStroke={Colors.palette.black}
      width={BACK_BUTTON_SIZE}
      height={BACK_BUTTON_SIZE}
    />
  </TouchableOpacity>
);
