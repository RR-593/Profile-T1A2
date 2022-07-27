const skillButtons = document.querySelectorAll('.skill');
const modals = document.querySelectorAll('.skill-modal');

for (let button of skillButtons) {
  button.addEventListener('click', () => {
    
    var modal = document.getElementById(button.getAttribute('modal-name'));

    if (button.className.includes('selected')) {
      button.classList.remove('selected');
      modal.classList.remove('shown');
      return;
    }

    for (let button of skillButtons) {button.classList.remove('selected');}
    for (let modal of modals) {modal.classList.remove('shown');}

    button.classList.add('selected');

    modal.classList.add('shown');
  });
}