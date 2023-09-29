const form = document.querySelector("form");
form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Estä lomakkeen oletustoiminto

  const inputShow = document.getElementById("input-show").value;

  console.log(inputShow);

  if (!inputShow) {
    alert("Syötä TV-sarjan nimi ennen hakemista.");
    return;
  }

  // Kutsu getTvShow-funktiota vasta tässä vaiheessa
  await getTvShow(inputShow);
});
async function getTvShow(inputShow) {
  const tvUrl = `https://api.tvmaze.com/search/shows?q=${inputShow}`;
  const tvPromise = await fetch(tvUrl);
  const tvJson = await tvPromise.json();

  const showContainer = document.querySelector(".show-container");

  const showTitle = tvJson[0].show.name;
  const showSummary = tvJson[0].show.summary;
  const showImg = tvJson[0].show.image.medium;
  console.log(JSON.stringify(showTitle));
  console.log(JSON.stringify(showSummary));

  let divData = document.createElement("div");
  divData.classList.add("show-data");

  let img = document.createElement("img");

  let divInfo = document.createElement("div");
  divInfo.classList.add("show-info");

  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  h1.innerText = showTitle;

  img.src = showImg;
  img.alt = showTitle;

  const tempElement = document.createElement("div");
  tempElement.innerHTML = showSummary;
  const summaryText = tempElement.textContent;

  p.innerText = summaryText;

  divData.appendChild(img);
  divInfo.appendChild(h1);
  divInfo.appendChild(p);
  divData.appendChild(divInfo);
  showContainer.appendChild(divData);
}
