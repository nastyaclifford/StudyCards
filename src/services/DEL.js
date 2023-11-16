export class DEL {
  static async delWord(id, word) {
    try {
      await fetch(`https://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
    } catch (e) {
      console.error(e);
    }
  }
}
export default DEL;
