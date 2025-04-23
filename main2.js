let inputTask = document.querySelector(".input-container input");
console.log(inputTask);
let outputTask = document.querySelector(".output-container ul")
console.log(outputTask);

function addTaskToList() {
    if(inputTask.value !== "") {
        outputTask.innerHTML += `
        <li>
            <i class="fa-regular fa-circle" id="icon" ></i>
            <span>${inputTask.value}</span> 
            <button class="Delete">Delete</button>
        </li>
    `
    }
    addDataToStorage();
    inputTask.value = "";
    inputTask.focus();
    
}

outputTask.addEventListener("click", (e) => {
    if(e.target.className === "Delete") {
        e.target.parentElement.remove();
        addDataToStorage();
    }
    else if (e.target.id === "icon") {
        e.target.parentElement.style.opacity = ".5";
        e.target.className = "fa-solid fa-circle-check";
        addDataToStorage();
    }
})


function addDataToStorage() {
    localStorage.setItem("Data", outputTask.innerHTML);
}

function getDataFromStorage() {
    outputTask.innerHTML = localStorage.getItem("Data");
}

getDataFromStorage();
