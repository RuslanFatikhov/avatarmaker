// Моргание глаз
const eyes = document.querySelector('.eyes');

function blink() {
    // Анимация моргания через изменение scaleY
    eyes.style.transform = 'scaleY(0)';
    setTimeout(() => {
        eyes.style.transform = 'scaleY(1)';
    }, 200); // Продолжительность моргания 0.2 секунды
}

// Установить интервал моргания каждые 5 секунд
setInterval(blink, 5000);




