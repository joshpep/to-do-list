//javascript

let addButton = document.getElementById("addButton");
let toDoList = document.getElementById("list");
let inputField =  document.getElementById("input");
let clearAll = document.getElementById("clear");



addButton.addEventListener('click', function(){
     let list = document.createElement("li");
     let trash = document.createElement("button");
     let check = document.createElement("button");
    trash.className="fa fa-trash";
    check.className="fa fa-check";
    list.innerText = inputField.value;
    toDoList.appendChild(list);
    list.appendChild(check);
    list.appendChild(trash);
    inputField.value = this.getAttribute('placeholder');

    let completeList = document.getElementById("completeList"); 

    check.addEventListener('click', function(){
       
        completeList.appendChild(list);
        list.removeChild(check);

    });


 
    trash.addEventListener('click', function(){
        list.parentNode.removeChild(list)    
           
    });

   



});
 
    

clearAll.addEventListener('click', function(){
    toDoList.innerHTML = " "; 
    completeList.innerHTML = " ";  
});

