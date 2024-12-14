import { wallpaperApi } from "../api";
import { WallpaperEndpoint } from "../api/endpoints";
import BACKGROUND_LIST from "../assets/images";
import { Wallpaper, WallpaperResponse } from "../interfaces";

const PER_PAGE = 3; // retrieves 3 wallpaper and choose one of them
const ORIENTATION = "portrait";

type BackgroundQuery = {
  query: string;
};

export const getLocationBackground = async ({
  query,
}: BackgroundQuery): Promise<Wallpaper | null> => {
  const data = await wallpaperApi.get<WallpaperResponse>(
    WallpaperEndpoint.GetLocationWallpaper,
    {
      query,
      per_page: PER_PAGE,
      orientation: ORIENTATION,
    }
  );

  if (data.total === 0) {
    return null;
  }

  const chosenPhotoIndex = Math.floor(Math.random() * data.results.length);
  const chosenPhoto = data.results[chosenPhotoIndex];

  return {
    uri: chosenPhoto.urls.regular,
    details: {
      slug: chosenPhoto.alt_description,
      unsplashUrl: chosenPhoto.links.html,
      author: {
        name: chosenPhoto.user.name,
        username: chosenPhoto.user.username,
        image: chosenPhoto.user.profile_image.large,
      },
    },
  };
};

export const getLocalBackground = (
  options: Wallpaper[] = BACKGROUND_LIST
): Wallpaper => {
  const chosenPhotoIndex = Math.floor(Math.random() * options.length);
  return options[chosenPhotoIndex];
};
