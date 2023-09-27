export class PUT {
  static async putWord(id, word) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json;charset=utf-8" },
          body: JSON.stringify(word),
        }
      );
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
export default PUT;
