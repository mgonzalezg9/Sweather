import { Info } from "@/components/icons/Info";
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
    <Info size={INFO_BUTTON_SIZE} />
  </TouchableOpacity>
);
