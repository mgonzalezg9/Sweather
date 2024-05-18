import { SweatherErrorCode } from "@/logic/error";
import {
  getLocalBackground,
  getLocationBackground,
} from "@/services/wallpaper";
import { Uri } from "@/services/wallpaper/types";
import { useEffect, useState } from "react";

export default function useWallpaper(location?: string) {
  const [wallpaper, setWallpaper] = useState<Uri>();
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

        const uri = await getLocationBackground({
          query: location,
        });

        if (uri) {
          setWallpaper(uri);
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
