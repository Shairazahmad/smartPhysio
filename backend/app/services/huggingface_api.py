import requests
import os

HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/gpt2"
HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")

def call_huggingface_api(prompt):
    """Call the Hugging Face API and return the response."""
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    data = {"inputs": prompt}

    response = requests.post(HUGGINGFACE_API_URL, headers=headers, json=data)
    response.raise_for_status()
    result = response.json()

    # Extract the text response
    return result[0]["generated_text"]
