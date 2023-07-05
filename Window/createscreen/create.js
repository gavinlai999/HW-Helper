const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addHw(){
    if(inputBox.value===''){
        alert('Input Text!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveUserData();
}
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

function saveUserData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showSavedData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showSavedData();