from flask import Blueprint, request, jsonify
from app.services.gemini_api import call_gemini_api
from app.services.huggingface_api import call_huggingface_api

physiotherapy_bp = Blueprint("physiotherapy", __name__)

@physiotherapy_bp.route("/api/physiotherapy", methods=["POST"])
def get_physiotherapy_advice():
    try:
        # Get data from the frontend
        data = request.get_json()
        body_part = data.get("body_part")
        problem_type = data.get("problem_type")
        details = data.get("details")

        # Build the prompt
        prompt = (
            f"I have a problem with my {body_part}. The issue is {problem_type}. "
            f"Additional details: {details}. Provide physiotherapy advice."
        )

        # Call the API (Gemini or Hugging Face)
        response_text = call_gemini_api(prompt)
        # Uncomment this if you want to use Hugging Face instead:
        # response_text = call_huggingface_api(prompt)

        # Return the response to the frontend
        return jsonify({"advice": response_text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred while processing your request."}), 500
