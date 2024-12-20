let money = 0;
document.querySelector('.money').innerHTML = money;

document.body.addEventListener('keydown', (event) =>{
  if(event.key === 'Enter'){
    money += 1
    document.querySelector('.money').innerHTML = money;
  }
})

// Začátek
document.body
  .addEventListener('keydown', (event) => {
if (event.key === '+') {
  const playAudios = new Audio('./audio/zacatek.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Štvanice
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'ě') {
  const playAudios = new Audio('./audio/stvanice.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Lovec přichází
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'č') {
  const playAudios = new Audio('./audio/lovec-prichazi.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 0)
}})

// Lovec start
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'š') {
  const playAudios = new Audio('./audio/lovec-start.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 0)
}})


