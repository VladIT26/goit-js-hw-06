const changeInput = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeInput.addEventListener('input', onInput);
function onInput() {
  changeText.style.fontSize = `${changeInput.value}px`;
}
console.log(changeInput)