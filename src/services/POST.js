export class POST {
  static async postWord(data) {
    try {
      await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
  }
}
export default POST;
