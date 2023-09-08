const clickButton = document.getElementById("my-button");

clickButton.addEventListener("click", function () {
  console.log("hello world");

  // Found from
  // https://stackoverflow.com/questions/9529327/change-the-value-of-h1-element-within-a-form-with-javascript

  if (document.getElementById("titleText").innerHTML === "Moi maailma") {
    document.getElementById("titleText").innerHTML = "hello world";
  } else if (document.getElementById("titleText").innerHTML === "hello world") {
    document.getElementById("titleText").innerHTML = "Moi maailma";
  }
});

// Found from
// https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript

const addTextButton = document.getElementById("add-data");

addTextButton.addEventListener("click", function () {
  const ulList = document.getElementById("my-list");
  const li = document.createElement("li");
  const message = document.getElementById("text").value;

  li.appendChild(document.createTextNode(message));
  ulList.appendChild(li);
});
