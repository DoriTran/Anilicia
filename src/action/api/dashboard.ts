import { Anime } from "../type/interface";
import { http } from "./api";

async function getAnimeTop(filter: string): Promise<Anime[]> {
  const { data } = await http.get("/top/anime", {
    params: {
      filter,
      page: 1,
      limit: 10,
    },
  });

  return data.data;
}

export async function getAnimeTrending(): Promise<Anime[]> {
  const data = await getAnimeTop("airing");
  return data;
}

export async function getAnimeLatest(): Promise<Anime[]> {
  const { data } = await http.get("/seasons/now", {
    params: {
      page: 1,
      limit: 10,
    },
  });

  return data.data;
}

export async function getAnimeUpcoming(): Promise<Anime[]> {
  const data = await getAnimeTop("upcoming");
  return data;
}

export async function getAnimePopular(): Promise<Anime[]> {
  const data = await getAnimeTop("bypopularity");
  return data;
}

export async function getAnimeFavorite(): Promise<Anime[]> {
  const data = await getAnimeTop("favorite");
  return data;
}
