import { get } from "../utils/httpClient";
import config from "../config/global";

const UNSPLASH_API_KEY = config.UNSPLASH_API_KEY as string;
const UNSPLASH_URL = config.UNSPLASH_URL as string;

const PER_PAGE = 1;
const ORIENTATION = "portrait";

export const getLocationBackground = async ({ query }: { query: string }) => {
  const data = await get(`${UNSPLASH_URL}/search/photos`, {
    query,
    per_page: PER_PAGE,
    orientation: ORIENTATION,
    client_id: UNSPLASH_API_KEY,
  });

  return data.results[0].urls.regular;
};
