export class GET {
  static async getWord() {
    try {
      const resp = await fetch("https://itgirlschool.justmakeit.ru/api/words");
      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
export default GET;
