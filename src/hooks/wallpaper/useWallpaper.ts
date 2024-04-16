import { getLocalBackground, getLocationBackground } from '@/services/wallpaper';
import { Uri } from '@/services/wallpaper/types';
import { useEffect, useState } from 'react';

export default function useWallpaper(location?: string) {
  const [wallpaper, setWallpaper] = useState<Uri>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<unknown>();

  useEffect(() => {
    if (!location) {
      return;
    }

    try {
      console.log(`Searching wallpaper for ${location}`);
      setLoading(true);

      getLocationBackground({
        query: location,
      }).then(uri => {
        if (uri) setWallpaper(uri)
      });
    } catch (error) {
      console.error("Unable to retrieve wallpaper from location");
      setError(error);

      setWallpaper(getLocalBackground());
    } finally {
      setLoading(false);
    }
  }, [location]);

  return { wallpaper, loading: isLoading, error: isError };
}
