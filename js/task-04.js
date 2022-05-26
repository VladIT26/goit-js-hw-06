const incrementCount = document.querySelector('button[data-action="increment"]');
const decrementCount = document.querySelector('button[data-action="decrement"]');
const totalCount = document.querySelector("#value");

let count = 0;

const handleIncrement = () => {
  count += 1;
  totalCount.innerHTML = count;
};

const handleDecrement = () => {
  count -= 1;
  totalCount.innerHTML = count;
};
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);