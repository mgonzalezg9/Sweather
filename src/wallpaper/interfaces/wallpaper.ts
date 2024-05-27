export interface Wallpaper {
  uri: string;
  details?: {
    slug: string;
    author: Author;
  };
}

interface Author {
  name: string;
  username: string;
  link: string;
}
