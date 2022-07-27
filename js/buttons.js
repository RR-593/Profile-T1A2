button = document.querySelectorAll('.skill-button');

for (let button of lang_buttons) {
  button.addEventListener('click', () => {
    if (button.className.includes('shown')) {
      button.className = 'lang-button';
    }
    button.className = 'skill-button shown';
  });
}