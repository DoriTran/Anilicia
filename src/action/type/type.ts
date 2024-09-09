export type WeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"
  | "unknown"
  | "other";

export type Image = {
  image_url: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
};

export type Video = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Image;
};

export type Title = {
  type: string;
  title: string;
};

export type Time = {
  day: number;
  month: number;
  year: number;
};

export type Aired = {
  from: string;
  to: string;
  prop: {
    from: Time;
    to: Time;
  };
  string: string;
};

export type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

export type Info = {
  mal_id?: number;
  type?: string;
  name: string;
  url: string;
};

export type Relation = {
  relation: string;
  entry: Info[];
};

export type Theme = {
  openings: string[];
  endings: string[];
};

export type ImageUrl = {
  jpg?: Image;
  webp?: Image;
};

export type CharInfo = {
  mal_id: number;
  url: string;
  images: ImageUrl;
  name: string;
};

export type VoiceActor = {
  person: CharInfo;
  language: string;
};

export type PaginationItems = {
  count: number;
  total: number;
  per_page: number;
};

export type Comment = {
  url: string;
  author_username: string;
  author_url: string;
  date: string;
};

export type PromoVideo = {
  title: string;
  trailer: Video;
};

export type EpisodeVideo = {
  mal_id: number;
  url: string;
  title: string;
  episode: string;
  images: ImageUrl;
};

export type MusicVideo = {
  title: string;
  video: Video;
  meta: {
    title: string;
    author: string;
  };
};

export type Score = {
  score: number;
  votes: number;
  percentage: number;
};

export type User = {
  username: string;
  url: string;
  images: ImageUrl;
};

export type Reactions = {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
};
