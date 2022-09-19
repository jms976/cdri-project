import Http from "@/modules/Http";
import { title } from "process";

export const getSearchBooks = async (
  {target = 'title', page = 1, value = ''}:{target: string, page: number, value: string}
  ) => {
    try {
      const result = await Http.get(
        `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${page}&size=10&query=${value}&target=${target}`
      );
      if (result.status !== 200) throw result.data; 
      return Promise.resolve(result.data);
    } catch (e) {
      return Promise.reject({ result: false });
    }
};
