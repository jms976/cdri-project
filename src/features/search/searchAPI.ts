import Http from "@/modules/Http";

export const getSearchBooks = async () => {
  try {
    const result = await Http.get(
      `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=%EC%B1%85&target=title`
    );
    console.log(result);
    return result.data;
  } catch (e) {
    return Promise.reject({ result: false });
  }
};
