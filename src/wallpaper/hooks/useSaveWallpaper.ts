import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Wallpaper } from "../interfaces";

const ALBUM_NAME = "Sweather Wallpaper";
const WALLPAPER_NAME = "sweather_wallpaper";

export const useSaveWallpaper = () => {
  // STATE
  const [error, setError] = useState("");
  const [isStoring, setIsStoring] = useState(false);

  // HOOKS
  const [permission, requestPermission] = MediaLibrary.usePermissions();

  // METHODS
  const getWallpaperFilename = (wallpaper: Wallpaper) => {
    const name = wallpaper.details?.slug || WALLPAPER_NAME;
    return `${name}.jpg`;
  };

  const saveWallpaper = async (wallpaper: Wallpaper) => {
    const fileUri =
      FileSystem.documentDirectory + getWallpaperFilename(wallpaper);

    setIsStoring(true);

    try {
      const { uri } = await FileSystem.downloadAsync(wallpaper.uri, fileUri);

      if (permission?.status !== "granted") {
        await requestPermission();
      }

      const asset = await MediaLibrary.createAssetAsync(uri);

      const album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);
      if (!album) {
        await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (error) {
      setError(`Error downloading wallpaper: ${error}`);
    } finally {
      setIsStoring(false);
    }
  };

  return {
    error,
    isStoring,
    saveWallpaper,
  };
};
