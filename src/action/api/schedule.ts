import { Anime, Pagination } from "../type/interface";
import { WeekDay } from "../type/type";
import { http } from "./api";

export async function getAnimeLatest(weekday: WeekDay): Promise<{ data: Anime[]; pagination: Pagination }> {
  const { data } = await http.get("/schedules", {
    params: {
      filter: weekday,
      page: 1,
      limit: 10,
    },
  });

  return data.data;
}
