import * as Location from "expo-location";
import { useState } from "react";

interface UseUserCoordinatesProps {
  onCoordinatesDeny?: () => void;
}

export const useUserCoordinates = ({
  onCoordinatesDeny,
}: UseUserCoordinatesProps) => {
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<Location.LocationObject>();

  const requestCoordinates = async () => {
    setLoading(true);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      onCoordinatesDeny && onCoordinatesDeny();
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setCoordinates(location);
    setLoading(false);
  };

  const reset = () => {
    setCoordinates(undefined);
  };

  return {
    requestCoordinates,
    reset,
    coordinates,
    loading,
  };
};
