import json
import sys
import random
import pickle
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
import math

# Declare constants
max_length=120
padding_type='post'
trunc_type='post'



def readInputFile(path):
    """Read the input text from the file
        Return input text
    """
    f = open(path)
    input_text = json.load(f)['input']
    print(f"from readInputFile {input_text}")
    return input_text



def preprocess(input_text):
    """Tokenizer and pad the input text
        Return padded sequence    
    """
    input_list = [input_text]
    # import tokenizer
    with open("../pythonData/tokenizer.pickle", 'rb') as tokenizer_file:
        tokenizer = pickle.load(tokenizer_file)
    
    # Sequence the input
    text_sequence = tokenizer.texts_to_sequences(input_list)
    # Pad the sequence
    padded_sequence = pad_sequences(text_sequence, maxlen=max_length, padding=padding_type, truncating=trunc_type)
    print(f"from preprocess: {padded_sequence}")

    return padded_sequence


def loadModel():
    print("loading the model")
    return tf.keras.models.load_model('../pythonData/language_detector_model')

def loadLabelEncoder():
    print('label encoder loaded')
    return pickle.load(open('../pythonData/label_encoder.pkl','rb'))

def makePrediction():
    print("Starting Python...")
    # Read input from file
    input_text = readInputFile(sys.argv[2])

    # Preprocess the input text
    padded_sequence = preprocess(input_text)

    # Load model and label encoder
    model = loadModel()
    label_encoder = loadLabelEncoder()

    # Pass input into model and get predictions
    prediction = model.predict(padded_sequence)
    print(f"PREDICTIONS: {prediction}")
    index = np.argmax(prediction)
    print(f"INDEX: {index}")
    language = label_encoder.classes_[index]
    print(f"LANGUAGE: {language}")
    confidence = math.floor(prediction[0][index]*100)
    print(f"CONFIDENCE: {confidence}")
    
    # Write the predictions to the results file
    predictions = {'prediction':language,'confidence':confidence}
    json_object = json.dumps(predictions, indent=4)
    with open(sys.argv[3], 'w') as outputFile:
        outputFile.write(json_object)
    
    # Send 'OK' message back to Express
    print('OK')

# Run this function
if sys.argv[1] == 'makePrediction':
    makePrediction()

# Send print statement to Express
sys.stdout.flush()