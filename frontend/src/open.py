from flask import Flask, request, jsonify
from googletrans import Translator
import openai

app = Flask(_name_)
translator = Translator()

# ✅ Replace with your OpenAI key
openai.api_key = "YOUR_OPENAI_KEY"

@app.route("/translate-to-english", methods=["POST"])
def translate_to_english():
    data = request.get_json()
    text = data["text"]
    translated = translator.translate(text, dest="en").text
    return jsonify({"translated_text": translated})

@app.route("/llm-response", methods=["POST"])
def llm_response():
    data = request.get_json()
    prompt = data["text"]

    # Simple GPT API call
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
    )
    return jsonify({"output": response["choices"][0]["message"]["content"]})

@app.route("/translate-to-kannada", methods=["POST"])
def translate_to_kannada():
    data = request.get_json()
    text = data["text"]
    translated = translator.translate(text, dest="kn").text
    return jsonify({"translated_text": translated})

if _name_ == "_main_":
    app.run(debug=True)