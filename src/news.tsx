// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/everything?q=football&apiKey=58fe11eb125344f7a08f337eeb2b05e7";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}