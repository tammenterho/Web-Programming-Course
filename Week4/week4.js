const form = document.querySelector("form");
const showContainer = document.querySelector(".show-container");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const inputShow = document.getElementById("input-show").value;

  console.log(inputShow);

  if (!inputShow) {
    alert("Syötä TV-sarjan nimi ennen hakemista.");
    return;
  }
  showContainer.innerHTML = "";

  await getTvShows(inputShow);
});

async function getTvShows(inputShow) {
  const tvUrl = `https://api.tvmaze.com/search/shows?q=${inputShow}`;
  const tvPromise = await fetch(tvUrl);
  const tvJson = await tvPromise.json();

  if (tvJson.length > 0) {
    tvJson.forEach((result) => {
      const show = result.show;

      const showTitle = show.name;
      const showSummary = show.summary;
      const showImg = show.image.medium;

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
    });
  } else {
    showContainer.innerHTML = "<p>Ohjelmia ei löytynyt.</p>";
  }
}
