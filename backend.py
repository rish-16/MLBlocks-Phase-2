from flask import Flask, request, redirect, url_for, flash, jsonify
import numpy as np

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def predict():
    data = request.get_json()

    return data