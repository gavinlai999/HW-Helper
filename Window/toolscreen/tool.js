//Calculator Functions
//Variables taken from HTML files
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        //If = button clicked, add everything together
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        //If AC button clicked, clear everything that was inputted
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // If Del button clicked, delete the latest input
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // Add/subtract everything
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})


//Word Counter Functions
//Variables taken from HTML files
let inputTextArea = document.getElementById('wordcounter-textarea');
let characCount = document.getElementById('character-counter');
let wordCount = document.getElementById('word-counter');

inputTextArea.addEventListener('input', ()=>{
    //Counts the amount of characters there are
    characCount.textContent = inputTextArea.value.length;
    //Change value when the words are deleted
    let txt = inputTextArea.value.trim();
    //Keeps count of the amount of words there are from the inputted text by user
    wordCount.textContent = txt.split(/\s+/).filter((item)=>item).length
})