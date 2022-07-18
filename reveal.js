let revealPassword = document.querySelector('.reveal')

  revealPassword.addEventListener('click', () =>{
    if(inputPassword.type === 'password'){
      inputPassword.type = 'text'
      revealPassword.innerText = 'Ocultar'
      console.log('testando123')
    }
    else if(inputPassword.type === 'text'){
      inputPassword.type = 'password'
      revealPassword.innerText = 'Mostrar'
    }
  })