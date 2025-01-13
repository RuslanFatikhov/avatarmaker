// Смена очков персонажа
const glassesCards = document.querySelectorAll('.block .cards .card[id^="glass"]');
const characterGlass = document.querySelector('.character .glass');

glassesCards.forEach(card => {
    card.addEventListener('click', () => {
        if (characterGlass.src === card.src) return;
        characterGlass.style.opacity = '0';
        setTimeout(() => {
            characterGlass.src = card.src;
            characterGlass.style.opacity = '1';
        }, 300);
        glassesCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Смена шляпы
const hatCards = document.querySelectorAll('.block .cards .card[id^="hat"]');
const characterHat = document.querySelector('.character .hat');

hatCards.forEach(card => {
    card.addEventListener('click', () => {
        if (characterHat.src === card.src) return;
        characterHat.style.opacity = '0';
        setTimeout(() => {
            characterHat.src = card.src;
            characterHat.style.opacity = '1';
        }, 300);
        hatCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Смена футболки
const shirtCards = document.querySelectorAll('.block .cards .card[id^="shirt"]');
const characterShirt = document.querySelector('.character .shirt');

shirtCards.forEach(card => {
    card.addEventListener('click', () => {
        if (characterShirt.src === card.src) return;
        characterShirt.style.opacity = '0';
        setTimeout(() => {
            characterShirt.src = card.src;
            characterShirt.style.opacity = '1';
        }, 300);
        shirtCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Смена штанов
const pantsCards = document.querySelectorAll('.block .cards .card[id^="pants"]');
const characterPants = document.querySelector('.character .pants');

pantsCards.forEach(card => {
    card.addEventListener('click', () => {
        if (characterPants.src === card.src) return;
        characterPants.style.opacity = '0';
        setTimeout(() => {
            characterPants.src = card.src;
            characterPants.style.opacity = '1';
        }, 300);
        pantsCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Смена обуви
const shoesCards = document.querySelectorAll('.block .cards .card[id^="shoes"]');
const characterShoes = document.querySelector('.character .shoes');

shoesCards.forEach(card => {
    card.addEventListener('click', () => {
        if (characterShoes.src === card.src) return;
        characterShoes.style.opacity = '0';
        setTimeout(() => {
            characterShoes.src = card.src;
            characterShoes.style.opacity = '1';
        }, 300);
        shoesCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});
