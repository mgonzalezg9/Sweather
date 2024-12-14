import { ArrowLeftIcon } from "@/components";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const BACK_BUTTON_SIZE = 30;

interface BackButtonProps {
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BackButton = ({ onClick, style }: BackButtonProps) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <ArrowLeftIcon size={BACK_BUTTON_SIZE} />
  </TouchableOpacity>
);
