const skillButtons = document.querySelectorAll('.skill');


console.log(skillButtons);
for (let button of skillButtons) {
  button.addEventListener('click', () => {
    
    if (button.className.includes('shown')) {
      button.classList.remove('shown');
      return;
    }
    for (let button of skillButtons) {button.classList.remove('shown');}
    button.classList.add('shown');
  });
}