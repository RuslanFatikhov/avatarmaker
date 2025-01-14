// Переменная для хранения выбранного пола
let selectedGender = null;

// Функция для выбора пола
function selectGender(gender) {
    selectedGender = gender;
    const genderText = gender === "male" ? "Мужской" : "Женский";
    document.getElementById("gender-display").textContent = genderText;
}

// Функция для подтверждения выбора пола
function confirmGender() {
    if (!selectedGender) {
        alert("Пожалуйста, выберите пол перед подтверждением.");
        return;
    }

    // Загружаем текущие данные персонажа
    fetch("/get_character")
        .then(response => response.json())
        .then(character => {
            // Добавляем гендер к объекту персонажа
            character.gender = selectedGender;

            // Сохраняем обновлённые данные на сервере
            return fetch("/save_character", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(character),
            });
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                // Переход на следующий экран
                document.getElementById("create-character-step-2").style.display = "none";
                document.getElementById("create-character-step-3").style.display = "block";
            } else {
                console.error("Ошибка при сохранении данных:", data.error);
                alert("Ошибка при сохранении данных!");
            }
        })
        .catch(error => {
            console.error("Ошибка при запросе:", error);
            alert("Не удалось обновить данные на сервере!");
        });
}

// Сохранение первого этапа (и переход на второй)
function saveStep1() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;

    const character = {
        name: name.trim(),
        birth: dob,
    };

    fetch("/save_character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById("create-character-step-1").style.display = "none";
                document.getElementById("create-character-step-2").style.display = "block";
            } else {
                alert("Ошибка при сохранении данных!");
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
            alert("Не удалось сохранить данные на сервере!");
        });
}

// Функция для возврата на первый этап
function goBackToStep1() {
    document.getElementById("create-character-step-2").style.display = "none";
    document.getElementById("create-character-step-1").style.display = "block";
}


function goBackToStep2() {
    document.getElementById("create-character-step-3").style.display = "none";
    document.getElementById("create-character-step-2").style.display = "block";
}
