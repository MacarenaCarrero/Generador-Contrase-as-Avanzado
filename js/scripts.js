const checkbox1Element = document.getElementById("checkbox1")
const checkbox2Element = document.getElementById("checkbox2")
const checkbox3Element = document.getElementById("checkbox3")
const checkbox4Element = document.getElementById("checkbox4")
const generatePasswordElement = document.getElementById("generatePassword")
const rangeElement = document.getElementById("range")
const uppercaseElement = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const passContentLettersElement = "abcdfghijklmñopqrstuvwxyz"
const passContentNumbersEelement = "1234567890"
const passContentSymbolsElement = " .,/*@;:&%()·/$-><= "
const lengthPassElement = document.getElementById ("lengthPass")
const passwordElement = document.getElementById("password")

let newPassword=""

const checkboxInfo = event => {
    if(uppercaseElement.checked){
        generatePasswordElement.disabled= false
    }else if (passContentLettersElement.checked){
        generatePasswordElement .disabled= false
    }else if (passContentNumbersElement.checked){ 
        generatePasswordElement .disabled = false
    }else if (passContentSymbolsElement.checked){
        generatePasswordElement .disabled =false
    }else {
        generatePasswordElement.disables =true
}    
    }



let passwordLength = 0
const lengthPass = (event) =>{
    console.log(event.target.value);
    passwordLength = event.target.value
    lengthPassElement.textContent = "Length: " + event.target.value
}

const generatePass = () => {
    let newPassword=""
    for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random()*passContentLetters.length)
        const randomCharacter =passContentLetters.charAt(randomNumber)
        newPassword= newPassword + randomCharacter
    }
    passwordElement.textContent = newPassword
}

const selectionPassword = ()=> {
    let totalCharacter = ""
    if(uppercaseElement.checked){
        totalCharacter += uppercaseElement
    }
    if (passContentLettersElement.checked){
        totalCharacter += passContentLettersElement
        }
    
    if (passContentNumbersElement.checked){
        totalCharacter += passContentLettersElement
    }
    if(passContentSymbolsElement.checked){
        totalCharacter += passContentLettersElement
    }

    return totalCharacter
}


generatePasswordElement.addEventListener("change",checkboxInfo)
checkbox2Element.addEventListener("change",checkboxInfo)
checkbox3Element.addEventListener("change",checkboxInfo)
checkbox4Element.addEventListener("change",checkboxInfo)
rangeElement.addEventListener("input",lengthPass)
generatePasswordElement.addEventListener("click",generatePass)
