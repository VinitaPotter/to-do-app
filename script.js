var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function AddItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}

function AddItemAfterClick() {
    if (inputLength() > 0) {
        AddItem(); 
}
}

function AddItemAfterEnter(event) {
    if (inputLength() > 0 && event.which ===  13) {
        AddItem();
    }
}

button.addEventListener("click", AddItemAfterClick);
input.addEventListener("keypress", AddItemAfterEnter);







