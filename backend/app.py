from fastapi import FastAPI, UploadFile
from models import summarize_text, analyze_video, generate_image

app = FastAPI()

@app.post("/summarize")
async def summarize(text: str):
    return {"summary": summarize_text(text)}

@app.post("/analyze_video")
async def analyze(video: UploadFile):
    return {"analysis": analyze_video(video)}

@app.post("/generate_image")
async def generate(prompt: str):
    return {"image_url": generate_image(prompt)}
