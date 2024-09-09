/**
  G - All Ages
  PG - Children
  PG-13 - Teens 13 or older
  R - 17+ (violence & profanity)
  R+ - Mild Nudity
  Rx - Hentai
 */

import { Anime, Pagination, SearchParams, Season, SeasonParams } from "../type/interface";
import { http } from "./api";

export async function getAnimeLatest(
  searchParams: SearchParams,
  page: number,
): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get("/anime", {
    params: {
      ...searchParams,
      page,
      limit: 15,
    },
  });

  return data.data;
}

export async function getSeasonsList(): Promise<Season> {
  const { data } = await http.get("/seasons");
  return data.data;
}

export async function getSeason(
  seasonParams: SeasonParams,
  filterParams: SearchParams,
  page: number,
): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get(`/seasons/${seasonParams.year}/${seasonParams.season}`, {
    params: {
      ...filterParams,
      page,
      limit: 15,
    },
  });
  return data;
}

export async function getSeasonUpcoming(
  filterParams: SearchParams,
  page: number,
): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get("/seasons/upcoming", {
    params: {
      ...filterParams,
      page,
      limit: 15,
    },
  });
  return data;
}
