window.addEventListener('DOMContentLoaded', () =>{
  
  (function() {
    let i = 0;
    function toggle() {
      if(i >= 1){
        const cellphone = document.querySelectorAll('.cellphone img')[i - 1];
        cellphone.classList.remove('active')
      } else if(i === 0){
        const cellphone = document.querySelectorAll('.cellphone img')[3];
        cellphone.classList.remove('active')
      }
      const cellphone = document.querySelectorAll('.cellphone img')[i];
      cellphone.classList.add('active')
      i = (i + 1) % 4;
    }
    toggle()
    setInterval(toggle, 3500);
  })();
})