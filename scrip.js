const count = document.querySelector('.count');
const input = document.querySelector('input');

input.addEventListener('keyup', () => {
    const name = input.value;
    console.log(name);

    count.innerHTML = input.value.length;
});
