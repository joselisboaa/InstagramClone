const inputId = document.querySelector('#userlogin');
const spanId = document.querySelector('#user-id span');
const labelId = document.querySelector('#user-id');
const inputPassword = document.querySelector('#password');
const spanPassword = document.querySelector('#user-password span');
const labelPassword = document.querySelector('#user-password');
const buttonLogin = document.querySelector('.login-box button');

window.addEventListener('DOMContentLoaded', () =>{

  inputId.addEventListener('input', (event) => {
    const i = event.currentTarget;

    if(i.value !== ''){
      spanId.classList.add('textin');
      labelId.classList.add('textin');
    } else {
      spanId.classList.remove('textin');
      labelId.classList.remove('textin');
    }
  });

  inputPassword.addEventListener('input', (event) => {
    const i = event.currentTarget;

    if(i.value !== ''){
      spanPassword.classList.add('textin');
      labelPassword.classList.add('textin');

      revealPassword.innerText = 'Mostrar'
    }
    else{
      spanPassword.classList.remove('textin');
      labelPassword.classList.remove('textin');

      revealPassword.innerText = ''
    }

    const senha = i.value.split('');

    if(senha.length >= 6){
      buttonLogin.classList.add('active') 
    }
    else{
      buttonLogin.classList.remove('active')
    }
  });
  if(inputPassword.value === ''){
    revealPassword.innerText = ''
  };
})