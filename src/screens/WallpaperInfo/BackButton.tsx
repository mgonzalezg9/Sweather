import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const BACK_BUTTON_SIZE = 30;

interface BackButtonProps {
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BackButton = ({ onClick, style }: BackButtonProps) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <ArrowLeft size={BACK_BUTTON_SIZE} />
  </TouchableOpacity>
);
