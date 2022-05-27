const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

for (const item of allCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const allList = item.querySelectorAll("li");
    console.log(`Elements: ${allList.length}`);
}



