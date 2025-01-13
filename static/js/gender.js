document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки выбора пола
    const genderButtons = document.querySelectorAll('.gender_button');

    // Проверяем, существуют ли кнопки
    if (genderButtons.length > 0) {
        // Для каждой кнопки добавляем обработчик события
        genderButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем класс selected у всех кнопок
                genderButtons.forEach(btn => btn.classList.remove('selected'));

                // Добавляем класс selected к текущей нажатой кнопке
                button.classList.add('selected');

                // Логируем текущий выбор
                const selectedGender = button.getAttribute('data-gender');
                console.log(`Выбранный пол: ${selectedGender}`);

                // Обновляем отображение выбранного пола
                const genderDisplay = document.querySelector('#gender-display');
                if (genderDisplay) {
                    genderDisplay.textContent = `Выбранный пол: ${selectedGender}`;
                }
            });
        });
    } else {
        console.warn('Кнопки выбора пола не найдены!');
    }
});
