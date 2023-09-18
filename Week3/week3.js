const municipalities = document.getElementById("municipality");
const mpopulations = document.getElementById("population");

async function getmunicipality() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const mpromise = await fetch(url);
  const mJSON = await mpromise.json();
  console.log(mJSON);

  const tbody = document.querySelector("tbody");

  for (const code in mJSON.dataset.dimension.Alue.category.index) {
    const municipalityName = mJSON.dataset.dimension.Alue.category.label[code];

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerText = td2.innerText = municipalityName;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }
}

getmunicipality();
