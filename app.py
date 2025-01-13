import json
from flask import Flask, request, jsonify, render_template, redirect, url_for

app = Flask(__name__)

CHARACTER_FILE = "static/data/character.json"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_character", methods=["GET"])
def get_character():
    try:
        with open(CHARACTER_FILE, "r", encoding="utf-8") as file:
            data = json.load(file)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Character file not found"}), 404

@app.route("/save_character", methods=["POST"])
def save_character():
    new_data = request.json  # Данные с фронтенда (индексы частей персонажа)
    try:
        # Пробуем загрузить существующие данные
        try:
            with open(CHARACTER_FILE, "r", encoding="utf-8") as file:
                existing_data = json.load(file)
        except FileNotFoundError:
            # Если файла нет, создаём пустой объект
            existing_data = {}

        # Объединяем новые данные с существующими
        existing_data.update(new_data)

        # Записываем обратно в файл
        with open(CHARACTER_FILE, "w", encoding="utf-8") as file:
            json.dump(existing_data, file, indent=4, ensure_ascii=False)

        return jsonify({"status": "success", "redirect_url": url_for('character_page')})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Маршрут для отображения итоговой страницы с собранным персонажем
@app.route("/character")
def character_page():
    # В character.html будет <div class="character">, 
    # а скрипт сам подставит нужные изображения, используя данные из character.json
    return render_template("character.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
