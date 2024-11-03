const checkbox1Element = document.getElementById("checkbox1")
const checkbox2Element = document.getElementById("checkbox2")
const checkbox3Element = document.getElementById("checkbox3")
const checkbox4Element = document.getElementById("checkbox4")
const generatePasswordElement = document.getElementById("generatePassword")
const rangeElement = document.getElementById("range")
const passContentLetters = "abcdfghijklmñopqrstuvwxyz"
const passContentNumbers = "1234567890"
const passContentSymbols = " .,/*@;:&%()·/$-><= "
const lengthPassElement = document.getElementById ("lengthPass")
const passwordElement = document.getElementById("password")

const checkboxInfo = event => {
 if (event.target.checked){
    generatePasswordElement.disabled = false
 }else{
    generatePasswordElement.disabled= true
 }
console.dir(event.target.checked)
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



checkbox1Element.addEventListener("change",checkboxInfo)
checkbox2Element.addEventListener("change",checkboxInfo)
checkbox3Element.addEventListener("change",checkboxInfo)
checkbox4Element.addEventListener("change",checkboxInfo)
rangeElement.addEventListener("input",lengthPass)
generatePasswordElement.addEventListener("click",generatePass)
