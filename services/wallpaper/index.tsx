import { get } from "../../utils/httpClient";
import config from "../../config/global";
import { BackgroundQuery, Uri } from "./types.d";
import bg1 from "../../assets/images/background_1.jpg";
import bg2 from "../../assets/images/background_2.jpg";
import bg3 from "../../assets/images/background_3.jpg";
import bg4 from "../../assets/images/background_4.jpg";
import bg5 from "../../assets/images/background_5.jpg";

const UNSPLASH_API_KEY = config.UNSPLASH_API_KEY as string;
const UNSPLASH_URL = config.UNSPLASH_URL as string;

const PER_PAGE = 3; // retrieves 3 wallpaper and choose one of them
const ORIENTATION = "portrait";
const BACKGROUND_LIST = [bg1, bg2, bg3, bg4, bg5];

export const getLocationBackground = async ({
  query,
}: BackgroundQuery): Promise<Uri | null> => {
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

export const getLocalBackground = () => {
  const choosenPhotoIndex = Math.floor(Math.random() * BACKGROUND_LIST.length);
  return BACKGROUND_LIST[choosenPhotoIndex];
};
