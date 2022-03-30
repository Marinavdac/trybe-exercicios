

window.addEventListener('change', function () {
    const text = document.getElementById('text');
    let selector = document.querySelector('select');
    let selected = selector.selectedOptions[0];
    text.style.backgroundColor = selected.value;  
})


// const font = document.getElementById('fontSize');
// font.addEventListener = ('click', function () {
//     const p
// })