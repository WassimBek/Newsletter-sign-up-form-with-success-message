const button1 = document.getElementById('btn1') ;
const button2 = document.getElementById('dismiss_btn') ;
const inputData = document.getElementById('adress_User') ;
const firstSection = document.getElementById('first_Profile') ;
const secondSection = document.getElementById('Thanks') ;
const noValidate = document.querySelector('.validate') ;
const labelText = document.querySelector('label') ;
const validEmail = document.querySelector('span') ; 
let emailRgx = /^([a-zA-Z-0-9\._]+)@([a-zA-Z0-9])+.comm?$/ ;
button1.addEventListener('click',()=> {
    if(emailRgx.test(inputData.value)) {
        firstSection.style.visibility = "hidden" ;
        secondSection.style.visibility = "visible" ;
        validEmail.textContent = inputData.value ;
    }else {
        inputData.style.borderColor = "hsl(4, 100%, 67%) " ;
        inputData.style.backgroundColor = "rgba(255, 232, 230, 1)"
        labelText.style.color = "red";
        noValidate.style.display = "block" ;
    }
})

button2.addEventListener('click',()=>{
    firstSection.style.visibility = 'visible' ;
    secondSection.style.visibility = 'hidden' ;
    inputData.style.borderColor = "hsla(0, 0%, 0%, 0.14)" ;
    inputData.style.backgroundColor = "transparent"
    labelText.style.color = "hsl(234, 29%, 20%)";
    noValidate.style.display = "none" ;

})



