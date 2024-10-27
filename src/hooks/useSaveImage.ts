import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";

type UseSaveImageProps = {
  imageURL: string;
  fileName: string;
  albumName: string;
};

export const useSaveImage = (props: UseSaveImageProps) => {
  // PROPS
  const { imageURL, fileName, albumName } = props;

  // STATE
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // HOOKS
  const [permission, requestPermission] = MediaLibrary.usePermissions();

  // METHODS
  const save = async () => {
    const fileUri = `${FileSystem.documentDirectory}${fileName}.jpg`;

    setIsSaving(true);

    try {
      const { uri } = await FileSystem.downloadAsync(imageURL, fileUri);

      if (permission?.status !== "granted") {
        await requestPermission();
      }

      const asset = await MediaLibrary.createAssetAsync(uri);

      const album = await MediaLibrary.getAlbumAsync(albumName);
      if (!album) {
        await MediaLibrary.createAlbumAsync(albumName, asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }

      console.log(`Saved image from "${imageURL}" in album "${albumName}`);
    } catch (err) {
      setError(
        `Error saving image from "${imageURL}" in album "${albumName}". ${err}`
      );
    } finally {
      setIsSaving(false);
    }
  };

  return {
    error,
    isSaving,
    save,
  };
};
