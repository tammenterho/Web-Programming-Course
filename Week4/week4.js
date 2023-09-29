async function getTvShow() {
  const tvUrl = "https://api.tvmaze.com/search/shows?q=friends";
  const tvPromise = await fetch(tvUrl);
  const tvJson = await tvPromise.json();

  const showContainer = document.querySelector(".show-container");

  const showTitle = tvJson[0].show.name;
  const showSummary = tvJson[0].show.summary;
  console.log(JSON.stringify(showTitle));
  console.log(JSON.stringify(showSummary));

  let divData = document.createElement("div");
  let img = document.createElement("img");
  let divInfo = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  h1.innerText = showTitle;

  const tempElement = document.createElement("div");
  tempElement.innerHTML = showSummary;
  const summaryText = tempElement.textContent;

  p.innerText = summaryText;

  divInfo.appendChild(h1);
  divInfo.appendChild(p);
  showContainer.appendChild(divInfo);
}

getTvShow();
