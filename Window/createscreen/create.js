//Variables
const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

//Homework List
function addHw(){
    //If text box is empty and user tries to add homework, they will get alerted to type something in
    if(inputBox.value===''){
        alert('Input Text!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        //Creates an 'x' area that can be clicked to remove homework from list
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveUserData();
}

//Saves the actions done by user(Deleting or adding homework in Homework List)
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveUserData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveUserData();
    }
}, false);


//Saves the user's input in homework list
function saveUserData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showSavedData(){
    listContainer.innerHTML = localStorage.getItem('data');
}

//Saves the data in cloud
showSavedData();