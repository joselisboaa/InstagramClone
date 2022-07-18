window.addEventListener('DOMContentLoaded', () =>{
  const cellphone = document.querySelector('.cellphone img');
  
  //aplicação 2: um transition no css e z-index igual a 100
  // e ao invés de atribuir o src à cellphone atribui a classe 
  
  (function() {
    let i = 0;
    let pics = ['./assets/mulher-e-gato.png', './assets/imginsta.png', './assets/reels.png', './assets/chat.png']
    function toggle() {
      cellphone.src = pics[i];
      cellphone.getAttribute('src', cellphone.src)
      i = (i + 1) % pics.length;
    }
    toggle()
    setInterval(toggle, 3500);
  })();
})