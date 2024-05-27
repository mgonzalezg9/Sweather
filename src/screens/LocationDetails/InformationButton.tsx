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
      darkColor={Colors.palette.white}
      size={INFO_BUTTON_SIZE}
    />
  </TouchableOpacity>
);
