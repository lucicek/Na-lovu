let lovecProgress = 8;



document.body.addEventListener('keydown', (event) => {
  if(event.key === 'l') {
    if(lovecProgress > 1){
    lovecProgress--;
    const buttonElement = document.querySelector(`.js-input${lovecProgress}`);
    buttonElement.classList.add('lovec');
    buttonElement.value = '';
    console.log(buttonElement.classList)
    };
  };
});

document.querySelector('.js-input7').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement7 = document.querySelector('.js-input7');

    const buttonElement6 = document.querySelector('.js-input6');
    buttonElement6.value =buttonElement7.value;
    buttonElement7.value = '';
  };
});

document.querySelector('.js-input6').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement6 = document.querySelector('.js-input6');

    const buttonElement5 = document.querySelector('.js-input5');
    buttonElement5.value =buttonElement6.value;
    buttonElement6.value = '';
  };
});

document.querySelector('.js-input5').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement5 = document.querySelector('.js-input5');

    const buttonElement4 = document.querySelector('.js-input4');
    buttonElement4.value =buttonElement5.value;
    buttonElement5.value = '';
  };
});

document.querySelector('.js-input4').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement4 = document.querySelector('.js-input4');

    const buttonElement3 = document.querySelector('.js-input3');
    buttonElement3.value =buttonElement4.value;
    buttonElement4.value = '';
  };
});

document.querySelector('.js-input3').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement3 = document.querySelector('.js-input3');

    const buttonElement2 = document.querySelector('.js-input2');
    buttonElement2.value =buttonElement3.value;
    buttonElement3.value = '';
  };
});

document.querySelector('.js-input2').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    const buttonElement2 = document.querySelector('.js-input2');

    const buttonElement1 = document.querySelector('.js-input1');
    buttonElement1.value =buttonElement2.value;
    buttonElement2.value = '';
  };
});

document.querySelector('.js-input1').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    let buttonElement1 = document.querySelector('.js-input1');
    buttonElement1.value = '';

  };
});

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



let otazky = 0;
document.body
  .addEventListener('keydown', (event) => {
if (event.key === ' ') {
  otazky++
  otazka()
  console.log(otazky);
}});

function otazka(){
  if(otazky === 1){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kolikátým kontinentem je Amerika na rozlohu?
  
<p>a)3.</p>
<p>b)4.</p>
<p>c)2.</p>`
  }

  if(otazky === 2){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jakého panovníka si zvolili čeští stavové po smrti Matyáše(před bitvou na Bílé hoře)?
  
<p>a)Fridricha Falckého</p>
<p>b)Josefa II.</p>
<p>c)Ferdinanda II.</p>`
  }

  if(otazky === 3){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaká je nejvyšší hora v Severní Americe?
  
<p>a)Aconquagua</p>
<p>b)Mt. Mc. Kinley</p>
<p>c)Mt. Blanc</p>`
  }

  if(otazky === 4){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Velká Británie je dnes:
  
<p>a)Stavovskou monarchií</p>
<p>b)Konstituční monarchí</p>
<p>c)Konstituční republikou</p>`
  }

  if(otazky === 5){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaký z těchto poloostrovů se nenachází v Americe?
  
<p>a)Čukotka</p>
<p>b)Kalifornský</p>
<p>c)Labradorský</p>`
  }

  if(otazky === 6){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `V jaké z těchto zemí proběhla občanská revoluce?
  
<p>a)Španělsko</p>
<p>b)Finsko</p>
<p>c)Francie</p>`
  }

  if(otazky === 7){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Grónsko patří jakému státu?
  
<p>a)Dánsku</p>
<p>b)Kanadě</p>
<p>c)Grónko nepatří žádnému státu (je samostatný stát)</p>`
  }

  if(otazky === 8){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Co měl na oblečení Karel I. před svou popravou?
  
<p>a)Zbytky od jídla</p>
<p>b)Bláto</p>
<p>c)Zvratky</p>`
  }

  if(otazky === 9){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaký stát se jako poslední připojil k Americe?
  
<p>a)Aljaška</p>
<p>b)Havaj</p>
<p>c)Ohio</p>`
  }

  if(otazky === 10){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo stál v čele parlamentu v Anglii při občanské válce a potom vládl Anglii od roku 1649-16160?
  
<p>a)Oliver Cromwell</p>
<p>b)Jakub I.</p>
<p>c)Vilém Oranžský</p>`
  }

  if(otazky === 11){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaké zvíře žije v Jehličnatých lesích v Americe?
  
<p>a)Pásovec</p>
<p>b)Tygr</p>
<p>c)Los</p>`
  }

  if(otazky === 12){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Co bylo dováženo z Ameriky, když byla Britskou Kolonií?
  
<p>a)Otroci</p>
<p>b)Tabák</p>
<p>c)Zbraně</p>`
  }

  if(otazky === 13){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Které z těchto zvířat nežije v Severní Americe?
  
<p>a)Mýval</p>
<p>b)Kapibara</p>
<p>c)Medvěd</p>`
  }

  if(otazky === 14){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdy bylo přijato prohlášení o nezávislosti?
  
<p>a)4. června 1776</p>
<p>b)17. Listopadu 1778</p>
<p>c)4. července 1776</p>`
  }

  if(otazky === 15){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Co jsou slumy?
  
<p>a)Luxusní budovy v Las Vegas</p>
<p>b)Chudinské čtvrti</p>
<p>c)nic to není</p>`
  }

  if(otazky === 16){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaký král vládl v době třicetileté války ve Francii?
  
<p>a)Mazarin</p>
<p>b)Ludvík XV.</p>
<p>c)Ludvík III.</p>`
  }

  if(otazky === 17){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo objevil Ameriku roku 1492?
  
<p>a)Vikingové</p>
<p>b)Aztékové</p>
<p>c)Krištof Kolumbus</p>`
  }

  if(otazky === 18){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kde si nechal Ludvík XIV. Vybudovat své sídlo?
  
<p>a)Ve Versailles</p>
<p>b)V Římě</p>
<p>c)Ve Vídni</p>`
  }

  if(otazky === 19){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo je hlavou státu Kanady?
  
<p>a)Kanadský král</p>
<p>b)Britský král</p>
<p>c)Kanadský prezident</p>`
  }

  if(otazky === 20){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Za vlády jakého francouzského panovnka vypukla Velká francouzská revoluce?
  
<p>a)Colberta</p>
<p>b)Napoleona</p>
<p>c)Ludvíka XVI.</p>`
  }

  if(otazky === 21){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jáký sport vznikl v Kanadě?
  
<p>a)Hokej</p>
<p>b)Bruslení</p>
<p>c)Biatlon</p>`
  }

  if(otazky === 22){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jak se nazýval ruský nevolník?
  
<p>a)Sibiřan</p>
<p>b)Vrač</p>
<p>c)Mužik</p>`
  }

  if(otazky === 23){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaká z těchto Anglických vět je z chemického hlediska pravdivá?
  
<p>a)Alcohol is a solution</p>
<p>b)Alcohol is mainly made of oil</p>
<p>c)Alcohol is unhealthy for people</p>`
  }

  if(otazky === 24){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaké je největší město Kanady?
  
<p>a)Vancouver</p>
<p>b)Ottawa</p>
<p>c)Toronto</p>`
  }

  if(otazky === 25){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo byl prvním prezidentem Ameriky?
  
<p>a)George Washington</p>
<p>b)Abraham Lincoln</p>
<p>c)George Bush</p>`
  }

  if(otazky === 26){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jaké město založil Petr I.?
  
<p>a)Novosibirsk</p>
<p>b)Petrohrad</p>
<p>c)Moskvu</p>`
  }

  if(otazky === 27){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jak se jinak nazývá New York?
  
<p>a)The Big Apple</p>
<p>b)Dream Land</p>
<p>c)The city of loudness</p>`
  }

  if(otazky === 28){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo vládl Habsburké monarchii po Karlu VI.
  
<p>a)Leopold II.</p>
<p>b)Josef II.</p>
<p>c)Marie Terezie</p>`
  }

  if(otazky === 29){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdy se stal Teroristický útok na dvojčata?
  
<p>a)11. září 2001</p>
<p>b)11. září 2011</p>
<p>c)1. září 2001</p>`
  }

  if(otazky === 30){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kdo zavedl v Čechách povinnou školní docházku?
  
<p>a)Marie Terezie</p>
<p>b)Josef II.</p>
<p>c)školní docházka se zavedla, až když vzniklo Československo`
  }

  if(otazky === 31){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jak se říká městům, které mají nad 10 mil. obyvatel?
  
<p>a)Aglomerace</p>
<p>b)Megalopole</p>
<p>c)konurbace`
  }

  if(otazky === 32){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Amerika je největším producentem:
  
<p>a)Dřeva</p>
<p>b)Javorového sirupu</p>
<p>c)zbraní`
  }

  if(otazky === 33){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Kolik kolonií se spojilo, aby vznikla Amerika?
  
<p>a)50</p>
<p>b)13</p>
<p>c)1`
  }

  if(otazky === 34){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Jakému státu patří město Washington DC?
  
<p>a)New Yorku</p>
<p>b)Washington</p>
<p>c)žádnému`
  }

  if(otazky === 35){
    console.log('Kolikátým')
    document.querySelector('.questions').innerHTML = `Která z těchto firem není Americká?
  
<p>a)Walmart</p>
<p>b)Google</p>
<p>c)Nokia`
  }



}









