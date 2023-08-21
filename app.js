const listContainer = document.getElementById('todo__list'); //target the ul element
const task = document.getElementById('input__box'); //target the input element to get the values
function addTask(){
    if(task.value == ''){
        alert('Enter Some Task');
    }else{
        let li = document.createElement('li');
        li.innerHTML = task.value;
listContainer.appendChild(li);

let span = document.createElement('span');
span.innerHTML = "\u00d7";

li.appendChild(span);
    task.value = "";
    saveTask();
}}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
        saveTask();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})
function saveTask(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

