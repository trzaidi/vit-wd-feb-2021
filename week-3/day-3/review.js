console.log("JavaScript successfully loaded");

function addTask() {
    console.log("The button has been clicked");
    // grab what the person typed
    var taskInput = document.getElementById("taskInput");
    console.log("The input DOM element: ", taskInputElement)
    console.log("The input value: ", taskInputElement.value);
    var whatUserTyped = taskInputElement.value;
    var newlyCreatedLi = document.createElement('li')
    newlyCreatedLi.innerText = whatUserTyped;
    // ul and li
    var taskListElement = document.getElementbyID("litaskList");
    taskListElement.appendChild(newlyCreatedLi);

    // store the value and display
    // createElement, change the innertext to the value and append the new element
}