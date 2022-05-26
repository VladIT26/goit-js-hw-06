const textInput = document.querySelector("#validation-input");
const attr = document.querySelector('input [data-length="6"]');
console.log(attr.dataset.length)

textInput.addEventListener('focus', onInputFocus);
textInput.addEventListener('blur', onInputBlur);

function onInputFocus() {
console.log(`focus`)
}
function onInputBlur() {
    if (textInput.data-length.value >= 6) {
      return textInput.valid
  }
}