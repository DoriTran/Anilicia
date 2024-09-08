import {
  Aired,
  Broadcast,
  CharInfo,
  Comment,
  EpisodeVideo,
  ImageUrl,
  Info,
  MusicVideo,
  PaginationItems,
  PromoVideo,
  Reactions,
  Relation,
  Score,
  Theme,
  Title,
  User,
  Video,
  VoiceActor,
} from "./type";

export interface Anime {
  mal_id: number;
  url: string;
  image: ImageUrl;
  trailer: Video;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  score_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Info[];
  licensors: Info[];
  studios: Info[];
  genres: Info[];
  explicit_genres: Info[];
  themes: Info[];
  demographics: Info[];
}

export interface AnimeDetail extends Anime {
  relations: Relation[];
  theme: Theme;
  external: Info[];
  streaming: Info[];
}

export interface Character {
  character: CharInfo;
  role: string;
  voice_actors: VoiceActor[];
}

export interface Staff {
  person: CharInfo;
  positions: string[];
}

export interface Episode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  duration: number;
  aired: string;
  filler: boolean;
  recap: boolean;
  forum_url?: string;
  synopsis?: string;
}

export interface New {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: ImageUrl;
  comments: number;
  excerpt: string;
}

export interface Forum {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  comments: number;
  last_comment: Comment;
}

export interface Videos {
  promo: PromoVideo[];
  episodes: EpisodeVideo[];
  music_videos: MusicVideo[];
}

export interface Statistics {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Score[];
}

export interface Entry {
  mal_id: number;
  url: string;
  images: ImageUrl;
  title: string;
}

export interface Recommendation {
  entry: {
    mal_id: number;
    url: string;
    images: ImageUrl;
    title: string;
  };
}

export interface UserUpdate {
  user: User;
  score: number;
  status: string;
  episodes_seen: number;
  episodes_total: number;
  date: string;
}

export interface Review {
  user: User;
  mal_id: number;
  url: string;
  type: string;
  reactions: Reactions;
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number;
}

export interface Genre {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  items?: PaginationItems;
}
