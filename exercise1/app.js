let todocontainer = document.getElementById("todocontainer");
let inptelem = document.getElementById("new todo")


function addmore(){
    if (inptelem.value == "") {
        return;}
   
    let listitem = document.createElement("li");
    listitem.innerHTML = inptelem.value;
    todocontainer.appendChild (listitem);
    inptelem.value = ""
}