// Смена фона персонажа

// Найти элементы
const bgCards = document.querySelectorAll('.block .cards .card[id^="bg"]');
const characterBg = document.querySelector('.character_bg');

// Добавить обработчики кликов
bgCards.forEach(card => {
    card.addEventListener('click', () => {
        // Проверить, если текущий фон уже выбран
        if (characterBg.src === card.src) {
            return; // Ничего не делать, если выбран тот же фон
        }

        // Сменить фон у персонажа с плавным исчезновением
        characterBg.style.opacity = '0'; // Начать плавное исчезновение
        setTimeout(() => {
            characterBg.src = card.src; // Изменить источник изображения
            characterBg.style.opacity = '1'; // Показать новый фон
        }, 300); // Время анимации совпадает с transition в CSS

        // Убрать выделение со всех карточек
        bgCards.forEach(c => c.classList.remove('selected'));

        // Добавить обводку к текущей карточке
        card.classList.add('selected');
    });
});
