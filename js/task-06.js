const input = document.querySelector("#validation-input");
input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  input.classList.add('invalid');
  
  if (Number(input.dataset.length) === Number(input.value.length)) {
   input.classList.replace('invalid', 'valid');
  }
}

