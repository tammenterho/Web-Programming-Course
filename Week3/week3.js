// ChatGPT:tä käytetty keskustelumuodossa, jotta ymmärsin kuinka päästä syvälle nestattuihin tietoihin. En lukenut ohjeita kunnolla,
// loput ohjeet täältä https://www.youtube.com/watch?v=fbLE9RQjHkk

async function getMunicipalityAndPopulation() {
  const munUrl =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const mpromise = await fetch(munUrl);
  const mJSON = await mpromise.json();
  console.log(mJSON);

  const populationUrl =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const ppromise = await fetch(populationUrl);
  const pJSON = await ppromise.json();
  console.log(pJSON);

  const employmentUrl =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const epromise = await fetch(employmentUrl);
  const eJSON = await epromise.json();
  console.log(eJSON);

  const tbody = document.querySelector("tbody");

  for (const code in mJSON.dataset.dimension.Alue.category.index) {
    const municipalityName = mJSON.dataset.dimension.Alue.category.label[code];

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerText = municipalityName;

    const populationCode = pJSON.dataset.dimension.Alue.category.index[code];
    // console.log(populationCode);
    const population = pJSON.dataset.value[populationCode];

    td2.innerText = population;

    const employment = eJSON.dataset.value[populationCode];

    td3.innerText = employment;

    const percentage = (employment / population) * 100;

    const roundPercentage = parseFloat(percentage);

    //https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript

    if (roundPercentage >= 45) {
      tr.style.backgroundColor = "#abffbd";
    } else if (roundPercentage <= 25) {
      tr.style.backgroundColor = "#ff9e9e";
    }

    console.log(typeof roundPercentage);
    td4.innerText = roundPercentage.toFixed(2) + "%";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  }
}
// https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places

getMunicipalityAndPopulation();
