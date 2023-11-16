# predict.py
import pickle
import sys
import numpy as np
from tensorflow.keras.models import load_model

# Load the Random Forest model
with open('random_forest_model.pkl', 'rb') as file:
    random_forest_model = pickle.load(file)

# Load the Neural Network model
neural_network_model = load_model('neural_network_model.h5')

# Read input from Node.js
input_data = sys.stdin.readline().strip().split(',')
input_data = [float(x) for x in input_data]

# Predict using the saved models
input_data = np.array(input_data).reshape(1, -1)

# Random Forest prediction
rf_prediction = random_forest_model.predict(input_data)[0]

# Neural Network prediction
nn_prediction = neural_network_model.predict(input_data, verbose=None)
nn_prediction = np.round(nn_prediction)[0][0]

# Send the predictions back to Node.js
print(f'Random Forest Prediction: {rf_prediction}')
print(f'Neural Network Prediction: {nn_prediction}')
