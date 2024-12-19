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












