async function getTvShow() {
  const tvUrl = "https://api.tvmaze.com/search/shows?q=";
  const tvPromise = await fetch(tvUrl);
  const tvJson = await tvPromise.json;
}
