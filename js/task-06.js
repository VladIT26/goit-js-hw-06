const textInput = document.querySelector("#validation-input");
const attributeLength = textInput.dataset.length;
console.log(attributeLength)

textInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (textInput.value.length.toString() === attributeLength) {
        textInput.classList.add('valid')
        console.log()
    } else {
        textInput.classList.add('invalid')
    }
}