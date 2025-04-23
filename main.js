let task = document.querySelector(".input-container .task");
let output = document.querySelector(".output-container ul");
let tasksArray = [];

task.focus();
function addTaskToList() {
    if(task.value !== "") {
        output.innerHTML += `
        <li>
        <i class="fa-regular fa-circle" id="icon" ></i>
        <span>${task.value}</span> 
        <button class="Delete">Delete</button>
        </li>
        `;
        
        addDataToStorage();
    
    }
    
    
    task.value = "";
    task.focus();
}

output.addEventListener("click", (e) => {
    if (e.target.className === "Delete") {
        e.target.parentElement.remove();
        addDataToStorage();
    }

    else if (e.target.id === "icon") {
        e.target.className = `fa-solid fa-circle-check`;
        console.log(e.target.className);
        e.target.parentElement.style.opacity = ".5";
        addDataToStorage();
        
    }
})


function addDataToStorage() {
    localStorage.setItem("Data", output.innerHTML)
}

function getDataFromStorage() {
    output.innerHTML = localStorage.getItem("Data");
}

getDataFromStorage();