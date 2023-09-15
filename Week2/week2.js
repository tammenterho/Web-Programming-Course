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

  let imageInput = document.getElementById("input-image");
  let selectedImage = imageInput.files[0];

  let img = document.createElement("img");
  if (selectedImage) {
    img.src = URL.createObjectURL(selectedImage);
    img.width = 64;
    img.height = 64;
  }

  imageCell.innerHTML = ""; // Tyhjennä solu ennen kuin lisäät kuvan
  imageCell.appendChild(img); // Lisää kuva soluun

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

      table.deleteRow(table.rows.length - 1);

      break;
    }
  }
  if (!usernameExists) {
    usernameCell.innerHTML = username;
    emailCell.innerHTML = email;
    adminCell.innerHTML = admin;
  }

  form.reset();
});

// https://stackoverflow.com/questions/63335136/how-to-add-a-button-to-clear-all-table-rows
// https://stackoverflow.com/questions/60804476/how-to-empty-table-in-javascript

// https://www.w3schools.com/jsref/met_table_deleterow.asp

const deleteData = document.getElementById("empty-table");

deleteData.addEventListener("click", function () {
  const rowCount = table.rows.length;

  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
});

// https://medium.com/@miguelznunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
