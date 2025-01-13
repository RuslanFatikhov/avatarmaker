import json
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

CHARACTER_FILE = "static/data/character.json"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_character", methods=["GET"])
def get_character():
    try:
        with open(CHARACTER_FILE, "r") as file:
            data = json.load(file)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Character file not found"}), 404

@app.route("/save_character", methods=["POST"])
def save_character():
    data = request.json  # Данные уже нормализуются на фронтенде
    try:
        with open(CHARACTER_FILE, "w") as file:
            json.dump(data, file, indent=4, ensure_ascii=False)
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5090)
