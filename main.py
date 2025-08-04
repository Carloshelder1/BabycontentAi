
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/run_pipeline")
async def run_pipeline():
    # Simular pipeline longo de geração
    time.sleep(5)  # Simula geração
    # Simula vídeo gerado e URL (em projeto real, será URL real do vídeo hospedado)
    video_url = "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"
    return {"message": "Pipeline executado com sucesso", "video_url": video_url}
