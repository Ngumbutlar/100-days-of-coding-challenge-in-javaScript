const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

// function to make modal visible
open.addEventListener('click', () =>{
    modal.classlist.add('show')
});
// function to hide modal
close.addEventListener('click', () =>{
    modal.classlist.remove('show');
});