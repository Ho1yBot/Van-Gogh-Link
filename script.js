const servicePlates = document.querySelectorAll(".services__plate");

// Проходим по каждому элементу
servicePlates.forEach((plate, index) => {
    // Создаем новый элемент с ценой
    let newPrice = document.createElement("p");
    newPrice.className = "price-number";
    newPrice.textContent = "0";

    // Находим соответствующий блок .plate__price в текущем элементе
    const platePrice = plate.querySelector(".plate__price");

    // Добавляем новый элемент с ценой в текущий блок .plate__price
    platePrice.appendChild(newPrice);
});
