const passwordHandler = document.getElementById('hideShow');
const inputHandler = document.getElementById('pword');
const usernameInput = document.getElementById('userName');
const loginListener = document.querySelector('.login');
const loginBtn = document.querySelector('.login-btn');

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

loginListener.addEventListener('keyup', ()=>{
  if (usernameInput.value !== '' && inputHandler.value.length > 4){
    loginBtn.classList.remove('disabled');
  } else {
    loginBtn.classList.add('disabled');
  }
})
