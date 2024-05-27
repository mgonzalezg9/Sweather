import { SweatherErrorCode } from "@/error/error-logic";
import {
  getLocalBackground,
  getLocationBackground,
} from "@/wallpaper/services/wallpaper";
import { useEffect, useState } from "react";
import { Wallpaper } from "../interfaces";

export default function useWallpaper(location?: string) {
  const [wallpaper, setWallpaper] = useState<Wallpaper>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<SweatherErrorCode | null>(null);

  useEffect(() => {
    if (!location) {
      return;
    }

    const loadWallpaper = async () => {
      try {
        console.log(`Searching wallpaper for ${location}`);
        setLoading(true);

        const wallpaper = await getLocationBackground({
          query: location,
        });

        if (wallpaper) {
          setWallpaper(wallpaper);
          setError(null);
        } else {
          throw new Error(`No wallpaper found for ${location}`);
        }
      } catch (error) {
        console.error("Unable to retrieve wallpaper from location", error);
        setError(SweatherErrorCode.WALLPAPER_SERVICE_ERROR);

        setWallpaper(getLocalBackground());
      } finally {
        setLoading(false);
      }
    };

    loadWallpaper();
  }, [location]);

  return { wallpaper, loading: isLoading, error: isError };
}
