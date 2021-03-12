function submit() {
    var entry = document.getElementById("task");
    var ul = document.getElementById("toDoList");
    var li = document.createElement("li");
    // console.log("lets look at the new element", li)
    li.innerText = entry.value;
    // console.log('see difference', li)
    ul.appendChild(li)
}