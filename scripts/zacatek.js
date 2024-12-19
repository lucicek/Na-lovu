let money = 0;
document.querySelector('.money').innerHTML = money;

document.body.addEventListener('keydown', (event) =>{
  if(event.key === 'Enter'){
    money += 5000
    document.querySelector('.money').innerHTML = money;
  }
})


