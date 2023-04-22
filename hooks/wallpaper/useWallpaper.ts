import { useEffect, useState } from 'react';
import { getLocalBackground, getLocationBackground } from '../../services/wallpaper';
import { Uri } from '../../services/wallpaper/types';

export default function useWallpaper(location?: string) {
  const [wallpaper, setWallpaper] = useState<Uri>(getLocalBackground());
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<unknown>();

  useEffect(() => {
    if (!location) {
      return;
    }

    try {
      console.log("Searching wallpaper");
      setLoading(true);

      getLocationBackground({
        query: location,
      }).then(uri => {
        if (uri) setWallpaper(uri)
      });
      setLoading(false);

    } catch (error) {
      console.error("Unable to retrieve wallpaper from location");
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [location]);

  return { wallpaper, loading: isLoading, error: isError };
}
