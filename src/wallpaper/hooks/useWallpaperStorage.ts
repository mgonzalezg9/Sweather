import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Uri } from "../interfaces";

const ALBUM_NAME = "Sweather Wallpaper";
const WALLPAPER_NAME = "wallpaper.jpg";

export const useWallpaperStorage = () => {
  const [error, setError] = useState("");
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions({
    writeOnly: true,
  });

  const moveWallpaperToAlbum = async (wallpaper: string, albumName: string) => {
    try {
      const album = await MediaLibrary.getAlbumAsync(albumName);
      const asset = await MediaLibrary.createAssetAsync(wallpaper);

      if (album == null) {
        await MediaLibrary.createAlbumAsync(albumName, asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(
          `Error setting wallpaper in album "${albumName}": ` + err.message
        );
      }
    }
  };

  const storeWallpaper = async (wallpaper: Uri) => {
    const fileUri = FileSystem.documentDirectory + WALLPAPER_NAME;

    try {
      const res = await FileSystem.downloadAsync(wallpaper.uri, fileUri);

      if (permissionResponse?.status !== "granted") {
        await requestPermission();
      }

      moveWallpaperToAlbum(res.uri, ALBUM_NAME);
    } catch (err) {
      if (err instanceof Error) {
        setError("Error downloading wallpaper: " + err.message);
      }
    }
  };

  return {
    storeWallpaper,
    error,
  };
};
