const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



// få ut random characters
// få ut 15 olika random characters
// visa dessa på skärmen när knappen trycks
let passwordOne = document.querySelector(".password-one-content")
let passwordTwo = document.querySelector(".password-two-content")
let toolTipOne = document.getElementById("tooltiptext-one")
let toolTipTwo = document.getElementById("tooltiptext-two")
let passwordQuantity = document.getElementById("quantity").value;

let passwordGenerated = false;

function generatePassword(passwordQuantity) {
    let randomCharacter = "";
    let password = "";
    for (let i = 0; i < passwordQuantity; i++) {
       randomCharacter = Math.floor(Math.random() * characters.length);
       password += characters[randomCharacter]
    }
    return password;
}

function getPassword() {
    passwordQuantity = document.getElementById("quantity").value;
    passwordOne.textContent = generatePassword(passwordQuantity);
    passwordTwo.textContent = generatePassword(passwordQuantity);
    toolTipOne.classList.remove("remove")
    toolTipTwo.classList.remove("remove")
    passwordGenerated = true;
}

async function copyContent(password) {
    if (!passwordGenerated) {
        return 
    } 

    try {
      await navigator.clipboard.writeText(password.textContent);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}