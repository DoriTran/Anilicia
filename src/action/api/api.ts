import axios from "axios";

export const apiMyAnimeList = "https://api.myanimelist.net/v2";
export const apiJikanMoe = "https://api.jikan.moe/v4";
export const animeTestId = 38000; // Demon Slayer: Kimetsu no Yaiba

export const http = axios.create({
  baseURL: apiJikanMoe,
});
