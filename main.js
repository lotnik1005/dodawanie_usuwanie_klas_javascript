const add = document.querySelector('.btn1');
const remove = document.querySelector('.btn2');
const toggle = document.querySelector('.btn3');
const text = document.querySelector('p');

const addFunction = () => {
    text.classList.add('new-color');
}
add.addEventListener('click', addFunction);

remove.addEventListener('click', function() {
    text.classList.remove('new-color');
});

toggle.addEventListener('click', function() {
    text.classList.toggle('new-color');
})