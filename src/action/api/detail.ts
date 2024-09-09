import { Anime, Character, New, Recommendation, Review, Videos } from "../type/interface";
import { http } from "./api";

export async function getAnimeDetail(animeId: number): Promise<Anime> {
  const { data } = await http.get(`/anime/${animeId}/full`);
  return data.data;
}

export async function getAnimeCharacters(animeId: number): Promise<Character[]> {
  const { data } = await http.get(`/anime/${animeId}/characters`);
  return data.data;
}

export async function getAnimeVideos(animeId: number): Promise<Videos> {
  const { data } = await http.get(`/anime/${animeId}/characters`);
  return data.data;
}

export async function getAnimeRecommendations(animeId: number): Promise<Recommendation> {
  const { data } = await http.get(`/anime/${animeId}/recommendations`);
  return data.data;
}

export async function getAnimeReviews(animeId: number): Promise<Review[]> {
  const { data } = await http.get(`/anime/${animeId}/reviews`, {
    params: {
      preliminary: true,
      spoilers: true,
    },
  });
  return data.data;
}

export async function getAnimeNews(animeId: number): Promise<New[]> {
  const { data } = await http.get(`/anime/${animeId}/news`);
  return data.data;
}
