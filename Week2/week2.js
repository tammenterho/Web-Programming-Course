const submit = document.getElementById("submit-data");
const form = document.getElementById("my-form");
const table = document.getElementById("my-table");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  //https://stackoverflow.com/questions/64483666/insert-form-values-in-a-table-using-javascript

  const newRow = table.insertRow();
  // const formElements = form.elements;

  const usernameCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const adminCell = newRow.insertCell();
  const imageCell = newRow.insertCell();

  // https://www.w3schools.com/jsref/dom_obj_input_image.asp

  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let admin = document.getElementById("input-admin").checked ? "X" : " ";
  let image = document.getElementById("input-image").value;

  let usernameExists = false;

  for (var i = 1; i < table.rows.length; i++) {
    //console.log(table.rows[i].cells[0].textContent);

    if (table.rows[i].cells[0].textContent === username) {
      console.log("löytyy jo");
      console.log(i);
      usernameExists = true;

      // const modifiedUsername = table.rows[i].cells[0].value;
      table.rows[i].cells[1].innerHTML =
        document.getElementById("input-email").value;
      table.rows[i].cells[2].innerHTML = document.getElementById("input-admin")
        .checked
        ? "X"
        : " ";

      break;
    }
  }
  if (!usernameExists) {
    usernameCell.innerHTML = username;
    emailCell.innerHTML = email;
    adminCell.innerHTML = admin;
    imageCell.innerHTML = image;
  }

  form.reset();
});

// https://stackoverflow.com/questions/63335136/how-to-add-a-button-to-clear-all-table-rows
// https://stackoverflow.com/questions/60804476/how-to-empty-table-in-javascript

const deleteData = document.getElementById("empty-table");

deleteData.addEventListener("click", function () {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].innerHTML = "";

    /*
    table.rows[i].cells[0].innerHTML = "";
    table.rows[i].cells[1].innerHTML = "";
    table.rows[i].cells[2].innerHTML = "";

    */
  }
});

// https://medium.com/@miguelznunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
