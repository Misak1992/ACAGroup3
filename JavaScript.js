const i = document.getElementById("I");
const content = document.querySelector(".content");
function myFunction() {
  if (i.value === "") {
    alert("Type something!");
  } else {
    let todo_div = document.createElement("div");
    todo_div.className = "contDiv";
    todo_div.id = "todoDivId";

    /*
    for (let j = 1; j < 1000; j++) {
      document.getElementById("todoDivId").setAttribute("id", "j");
    }
    */

    /*
    todo_div.classList.add = "newDiv";
    */

    let input_check = document.createElement("input");
    input_check.type = "checkbox";
    input_check.className = "check";
    todo_div.appendChild(input_check);

    let input_div = document.createElement("input");
    input_div.setAttribute("readonly", "true");
    todo_div.appendChild(input_div);

    input_div.value = i.value;

    todo_div.appendChild(input_div);

    let edit_but = document.createElement("button");
    edit_but.innerHTML = "Edit";
    edit_but.id = "Ed";
    todo_div.appendChild(edit_but);

    let remove_but = document.createElement("button");
    remove_but.innerHTML = "Remove";
    remove_but.id = "Rem";
    todo_div.appendChild(remove_but);

    content.append(todo_div);

    document.getElementById("Ed").addEventListener("click", funcEdit);

    function funcEdit() {
      if (edit_but.innerHTML === "Edit") {
        input_div.readOnly = false;
        edit_but.innerHTML = "Save";
      } else {
        edit_but.innerHTML = "Edit";
        input_div.readOnly = true;
      }
    }

    document.getElementById("Rem").addEventListener("click", funcRem);

    function funcRem() {
      let elem = document.getElementById("todoDivId");
      elem.parentNode.removeChild(elem);
    }

    i.value = "";
  }
}
