import * as Location from "expo-location";
import { useState } from "react";

interface UseUserLocationProps {
  onLocationDeny?: () => void;
}

export const useUserLocation = ({ onLocationDeny }: UseUserLocationProps) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject>();

  const requestLocation = async () => {
    setLoading(true);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      onLocationDeny && onLocationDeny();
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setLocation(location);
    setLoading(false);
  };

  const reset = () => {
    setLocation(undefined);
  };

  return {
    requestLocation,
    reset,
    location,
    loading,
  };
};
