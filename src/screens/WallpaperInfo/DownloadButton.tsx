import { DownloadArrow } from "@/components/icons/DownloadArrow";
import Colors from "@/constants/Colors";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const DONWLOAD_BUTTON_SIZE = 30;

interface DownloadButtonProps {
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

export const DownloadButton = ({ onClick, style }: DownloadButtonProps) => (
  <TouchableOpacity onPress={onClick} style={style}>
    <DownloadArrow
      lightColor={Colors.palette.black}
      lightStroke={Colors.palette.black}
      darkColor={Colors.palette.black}
      darkStroke={Colors.palette.black}
      width={DONWLOAD_BUTTON_SIZE}
      height={DONWLOAD_BUTTON_SIZE}
    />
  </TouchableOpacity>
);
