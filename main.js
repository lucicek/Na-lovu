// Začátek
document.querySelector('.key-pressed')
  .addEventListener('keydown', (event) => {
if (event.key === '+') {
  const playAudios = new Audio('./audio/zacatek.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Štvanice
document.querySelector('.key-pressed')
  .addEventListener('keydown', (event) => {
if (event.key === 'ě') {
  const playAudios = new Audio('./audio/stvanice.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Lovec přichází
document.querySelector('.key-pressed')
  .addEventListener('keydown', (event) => {
if (event.key === 'š') {
  const playAudios = new Audio('./audio/lovec-start.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 0)
}})

let scoreButtons = [1];

renderNaLovu()

// Skóre generátor
document.querySelector('.key-pressed').addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    scoreButtons.push(scoreButtons.length + 1)
    console.log(scoreButtons)
    renderNaLovu ()
    }})

// Renderuje a generuje buttony
function renderNaLovu () {
  let scoreButtonsHTML = '';
  for(let i = 0; i < scoreButtons.length; i++) {
    scoreButtonsHTML += `<button class="css-progress-design">${scoreButtons[i]}</button>`
    
  }document.querySelector('.js-na-lovu-progres').innerHTML = scoreButtonsHTML};