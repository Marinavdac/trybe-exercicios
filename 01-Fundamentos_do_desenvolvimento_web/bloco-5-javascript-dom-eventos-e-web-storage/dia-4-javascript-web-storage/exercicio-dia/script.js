const text = document.getElementById('text');

window.addEventListener('change', function () {
    // const text = document.getElementById('text');
    let selector = document.querySelector('select');
    let selected = selector.selectedOptions[0];
    text.style.backgroundColor = selected.value;
    
    localStorage.setItem('background-color', selected.value);
})

const fontBtn = document.getElementById('fontSize');

fontBtn.addEventListener('click', function () {
    const input = document.getElementById('input');
    let fontNumber = input.value + 'px';
    const textArea = document.getElementById('text');
    textArea.style.fontSize = fontNumber;
}
)

let savedBackground = localStorage.getItem('background-color');
text.style.backgroundColor = savedBackground;

console.log(savedBackground);