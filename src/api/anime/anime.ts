/* eslint-disable @typescript-eslint/no-unused-vars */
import { animeTestId, http } from "../api";
import {
  Anime,
  AnimeDetail,
  Character,
  Episode,
  Forum,
  Genre,
  New,
  Pagination,
  Recommendation,
  Review,
  Staff,
  Statistics,
  UserUpdate,
  Videos,
} from "./interface";

type WeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"
  | "unknown"
  | "other";

// ~ === All page === ~>
export async function getAnimeGenres(): Promise<Genre> {
  const { data } = await http.get(`/genres/anime`);
  return data;
}

// ~ === Dashboard page === ~>
export async function getAnimeSearch(): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get("/anime", {
    params: {
      order_by: "popularity",
    },
  });

  return data;
}

export async function getSchedules(weekDay: WeekDay): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get("/schedules", {
    params: {
      filter: weekDay || "other",
    },
  });

  return data;
}

// ~ === Detail page === ~>
export async function getAnimeFullById(id: number): Promise<AnimeDetail> {
  const { data } = await http.get(`/anime/${animeTestId}/full`, {
    params: {
      order_by: "popularity",
    },
  });

  return data;
}

export async function getAnimeChacters(id: number): Promise<Character> {
  const { data } = await http.get(`/anime/${animeTestId}/characters`);
  return data.data;
}

export async function getAnimeStaff(id: number): Promise<Staff> {
  const { data } = await http.get(`/anime/${animeTestId}/staff`);
  return data.data;
}

export async function getAnimeEpisodes(id: number): Promise<{ data: Episode[]; pagination: Pagination }> {
  const { data } = await http.get(`/anime/${animeTestId}/episodes`);
  return data;
}

export async function getAnimeNew(id: number): Promise<{ data: New[]; pagination: Pagination }> {
  const { data } = await http.get(`/anime/${animeTestId}/news`);
  return data;
}

export async function getAnimeForum(id: number): Promise<{ data: Forum[]; pagination: Pagination }> {
  const { data } = await http.get(`/anime/${animeTestId}/forum`, {
    params: {
      filter: "all",
    },
  });

  return data;
}

export async function getAnimeVideos(id: number): Promise<Videos> {
  const { data } = await http.get(`/anime/${animeTestId}/videos`);
  return data.data;
}

export async function getAnimeStatistics(id: number): Promise<Statistics> {
  const { data } = await http.get(`/anime/${animeTestId}/statistics`);
  return data.data;
}

export async function getAnimeMoreInfo(id: number): Promise<string> {
  const { data } = await http.get(`/anime/${animeTestId}/moreinfo`);
  return data.data.moreinfo;
}

export async function getAnimeRecommendations(id: number): Promise<Recommendation[]> {
  const { data } = await http.get(`/anime/${animeTestId}/recommendations`);
  return data.data;
}

export async function getAnimeUserUpdates(id: number): Promise<{ data: UserUpdate[]; pagination: Pagination }> {
  const { data } = await http.get(`/anime/${animeTestId}/userupdates`);
  return data;
}

export async function getAnimeReviews(id: number): Promise<{ data: Review[]; pagination: Pagination }> {
  const { data } = await http.get(`/anime/${animeTestId}/reviews`);
  return data;
}
