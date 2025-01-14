// Глобальный объект с выбранными индексами частей
const customizationData = {
  face: 0,
  hair: 0,
  eye: 0,
  nose: 0,
  mouth: 0,
  shirt: 0,
  pants: 0,
  shoes: 0
};

/**
* Универсальная функция для смены изображения определённой части персонажа
*/
function setCharacterPart(part, index, button) {
  const partElement = document.querySelector(`.character .${part}`);
  if (!partElement) return;

  // Смена изображения для основной части (например, shirt)
  partElement.src = `static/img/character/${part}/${part}_${index}.png`;

  // Если меняется shirt, также обновляем руки
  if (part === 'shirt') {
      const handLeft = document.querySelector('.character .hand_left');
      const handRight = document.querySelector('.character .hand_right');
      if (handLeft && handRight) {
          handLeft.src = `static/img/character/hand/hand_${index}.png`;
          handRight.src = `static/img/character/hand/hand_${index}.png`;
      }
  }

  // Управление активными кнопками
  const parent = button.closest('.buttons_stack');
  if (parent) {
      const siblingButtons = parent.querySelectorAll('.cc_tab');
      siblingButtons.forEach((btn) => btn.classList.remove('active'));
  }
  button.classList.add('active');

  // Сохраняем индекс в customizationData
  customizationData[part] = index;
}

// Обёртки для каждой части
function setFace(index, button)  { setCharacterPart('face',  index, button); }
function setHair(index, button)  { setCharacterPart('hair',  index, button); }
function setEye(index, button)   { setCharacterPart('eye',   index, button); }
function setNose(index, button)  { setCharacterPart('nose',  index, button); }
function setMouth(index, button) { setCharacterPart('mouth', index, button); }
function setShirt(index, button) { setCharacterPart('shirt', index, button); }
function setPants(index, button) { setCharacterPart('pants', index, button); }
function setShoes(index, button) { setCharacterPart('shoes', index, button); }

/**
* Функция "Применить" — отправляем выбранные настройки (customizationData) 
* на Flask, чтобы их сохранить/дополнить в character.json.
*/
function applyCustomization() {
  fetch('/save_character', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customizationData)
  })
  .then(response => response.json())
  .then(data => {
      if (data.status === 'success') {
          console.log('Персонаж успешно сохранён!');
          // Делаем редирект на страницу character.html
          if (data.redirect_url) {
              window.location.href = data.redirect_url;
          }
      } else {
          console.error('Ошибка при сохранении персонажа:', data);
      }
  })
  .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
  });
}
