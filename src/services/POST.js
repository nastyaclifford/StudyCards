export class POST {
  static async postWord(data) {
    try {
      await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
  }
}
export default POST;
