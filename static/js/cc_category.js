// cc_category.js

// Функция переключения верхних табов при создании персонажа
function selectTab(index) {
    // Получаем все верхние табы
    const tabs = document.querySelectorAll(".cc_tabs > .buttons_stack > .cc_tab");

    // Перебираем табы
    tabs.forEach((tab, i) => {
        const img = tab.querySelector("img"); // Находим иконку внутри таба

        if (i === index) {
            // Активируем выбранный таб
            tab.classList.add("active");

            // Меняем иконку на активную
            const activeIcon = img.getAttribute("src").replace(".svg", "_active.svg");
            img.setAttribute("src", activeIcon);
        } else {
            // Сбрасываем остальные табы
            tab.classList.remove("active");

            // Меняем иконку на обычную
            const defaultIcon = img.getAttribute("src").replace("_active.svg", ".svg");
            img.setAttribute("src", defaultIcon);
        }
    });

    // Обновляем отображение контента для выбранного таба
    document.querySelectorAll('.tab-content').forEach((content, i) => {
        if (i === index) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

