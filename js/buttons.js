skillButtons = document.querySelectorAll('.skill-button');

for (let button of skillButtons) {
  button.addEventListener('click', () => {
    if (button.className.includes('shown')) {
      button.classList.remove('shown');
      return;
    }
    button.classList.add('shown');
  });
}