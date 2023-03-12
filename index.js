const uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowercase = ['abcdefghijklmnopqrstuvwxyz'];
const numbers = ['0123456789'];
const symbols = ['~`!@#$%^&*()_-+={[}],|:;<>.?/'];

const contOneTxtEl = document.getElementById("cont-one-txt-el")
const contTwoTxtEl = document.getElementById("cont-two-txt-el")
const passwordLength = document.getElementById('password-length');
const passwordLengthValue = document.getElementById('password-length-value');
const lowercaseCheck = document.getElementById('lowercase');
const uppercaseCheck = document.getElementById('uppercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');

passwordLength.addEventListener('input', () => {
    passwordLengthValue.textContent = passwordLength.value;
    });
    
generateBtn.addEventListener('click', generatePass);

function generatePass() {
    const length = passwordLength.value;
    contOneTxtEl.textContent = "";
    contTwoTxtEl.textContent = ""; 
  let characters = [];
    if (lowercaseCheck.checked) {
     characters += lowercase;
  }
  if (uppercaseCheck.checked) {
    characters += uppercase;
  }
  if (numbersCheck.checked) {
    characters += numbers;
  }
  if (symbolsCheck.checked) {
    characters += symbols;
  }
  for (let i = 0; i < length; i++) {
    const randomIndexOne = characters[Math.floor(Math.random()* characters.length)];
    const randomIndexTwo = characters[Math.floor(Math.random()* characters.length)];
    contOneTxtEl.textContent += [randomIndexOne];
    contTwoTxtEl.textContent += [randomIndexTwo];
  }
} 
  
function copyPass(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}



