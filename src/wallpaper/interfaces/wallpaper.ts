export interface Wallpaper {
  uri: string;
  details?: {
    slug: string;
    author: Author;
    unsplashUrl: string;
  };
}

interface Author {
  name: string;
  username: string;
  image: string;
}
