import { Genre } from "../type/interface";
import { http } from "./api";

export async function getAnimeGenres(): Promise<Genre[]> {
  const { data } = await http.get("/genres/anime");
  return data.data;
}
