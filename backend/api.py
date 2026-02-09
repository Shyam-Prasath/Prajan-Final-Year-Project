from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

# Load model once (VERY IMPORTANT)
model = tf.keras.models.load_model(
    "rf_microwave_breast_cancer_model.h5"
)

app = FastAPI()

# Allow Next.js to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

IMG_SIZE = 224  # ⚠️ use SAME size as training

def preprocess_image(image: Image.Image):
    image = image.convert("RGB")
    image = image.resize((IMG_SIZE, IMG_SIZE))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    processed = preprocess_image(image)

    prediction = model.predict(processed)[0][0]

    result = "Cancer" if prediction > 0.5 else "Normal"
    confidence = float(prediction)

    return {
        "prediction": result,
        "confidence": round(confidence * 100, 2)
    }
