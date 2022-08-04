const skillButtons = document.querySelectorAll('.skill');
const modals = document.querySelectorAll('.skill-modal');
const divModal = document.getElementById('all-modals');

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    var modal = document.getElementById(button.getAttribute('modal-name'));
    var boolSelected = button.className.includes('selected');
    if (boolSelected) {
      cleanElements(boolSelected)
      
      return;
    }

    cleanElements(boolSelected)

    var rect = modal.getBoundingClientRect();
    modal.style.height = "calc( 100% - "+rect.top.toString().substring(0, 7)+"px)";
    divModal.style.height = 700+"px";

    button.classList.add('selected');
    modal.classList.add('shown');
  });
});

function cleanElements(boolSelected){
  skillButtons.forEach(button => {button.classList.remove('selected');});
  modals.forEach(modal => {
    modal.classList.remove('shown');
    modal.style.removeProperty('height');
    boolSelected ? setTimeout(() => {modal.style.zIndex= -1;}, 500) : modal.style.zIndex= 1;
  });
  divModal.style.height = "0px";
}