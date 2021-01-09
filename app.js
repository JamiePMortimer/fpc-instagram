const passwordHandler = document.getElementById('hideShow');
const inputHandler = document.getElementById('pword');

passwordHandler.addEventListener('click', buttonToggler)

function buttonToggler (){
  if(passwordHandler.textContent === 'Show'){
    passwordHandler.textContent = 'Hide';
    inputHandler.type = 'text'
} else {
  passwordHandler.textContent = 'Show'
  inputHandler.type = 'password'
}
}