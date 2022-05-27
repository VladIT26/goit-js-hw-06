const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfItems = document.querySelector('#ingredients');

const makeListItem = ingredients.map(element => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = element;
  return liElement;
})
listOfItems.append(...makeListItem)

  

