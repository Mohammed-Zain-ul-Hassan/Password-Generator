const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
let numbers = false , symbols = false;
let passLen = 15;

let pass1 = "", pass2 = "";

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let Symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function numState(){
    if(numbers){
        numbers = false;
    }
    else numbers = true;
}

function symState(){
    if(symbols){
        symbols = false;
    }
    else symbols = true;
}

function generate(){
    pass1 = "", pass2 = "";
    while(pass1.length < passLen || pass2.length  < passLen){
        if(pass1.length <= passLen){
            let idx = Math.floor(Math.random()*characters.length);
            if(numbers === true && symbols === true){
                pass1 += characters[idx];
            }
            else if(numbers === false && isNaN(characters[idx]) && symbols === true ){
                pass1 += characters[idx];
            }else if(symbols === false && !Symbols.includes(characters[idx]) && numbers === true ){
                pass1 += characters[idx];
            }else if (numbers === false && isNaN(characters[idx]) && symbols === false && !Symbols.includes(characters[idx])){
                pass1 += characters[idx];
            }
        }
        if(pass2.length <= passLen){
            let idx = Math.floor(Math.random()*characters.length);
            if(numbers === true && symbols === true){
                pass2 += characters[idx];
            }
            else if(numbers === false && isNaN(characters[idx]) && symbols === true ){
                pass2 += characters[idx];
            }else if(symbols === false && !Symbols.includes(characters[idx]) && numbers === true){
                pass2 += characters[idx];
            }else if (numbers === false && isNaN(characters[idx]) && symbols === false && !Symbols.includes(characters[idx])){
                pass2 += characters[idx];
            }
        }
    }
    document.getElementById("pass1").textContent = pass1;
    document.getElementById("pass2").textContent = pass2;
}



document.addEventListener('DOMContentLoaded', function() {
    const inputLen = document.getElementById('len');
  
    inputLen.addEventListener('change', function() {
        passLen = parseInt(this.value);
    });
});

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-button');
  
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-copy-target');
        const textToCopy = document.getElementById(targetId).innerText.trim();
  
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
  
        // Append the textarea to the body
        document.body.appendChild(textarea);
  
        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); /* For mobile devices */
  
        // Copy the selected text to the clipboard
        document.execCommand('copy');
  
        // Remove the temporary textarea
        document.body.removeChild(textarea);

         // Change button text to 'Copied'
        this.textContent = 'Copied';

        // Reset button text after 1 second
        setTimeout(() => {
            this.textContent = 'Copy';
        }, 1000);
      });
    });
  });
  
