import { get } from "../../utils/httpClient";
import config from "../../config/global";

const UNSPLASH_API_KEY = config.UNSPLASH_API_KEY as string;
const UNSPLASH_URL = config.UNSPLASH_URL as string;

const PER_PAGE = 3; // retrieves 3 wallpaper and choose one of them
const ORIENTATION = "portrait";

export const getLocationBackground = async ({ query }: { query: string }) => {
  const data = await get(`${UNSPLASH_URL}/search/photos`, {
    query,
    per_page: PER_PAGE,
    orientation: ORIENTATION,
    client_id: UNSPLASH_API_KEY,
  });

  if (data.total === 0) {
    return null;
  }

  const choosenPhotoIndex = Math.floor(Math.random() * data.results.length);
  return {
    uri: data.results[choosenPhotoIndex].urls.regular,
  };
};
