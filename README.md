
# Baby Content AI

Este projeto gera automaticamente vídeos infantis educativos com inteligência artificial.  

## Como usar

1. Configure as chaves no arquivo `backend/config.py`.  
2. Execute o backend Python com FastAPI:
   ```
   uvicorn backend.main:app --reload
   ```
3. Hospede o frontend (pasta `frontend`) em GitHub Pages ou servidor estático.  
4. O botão "Gerar Vídeo Automático" chama a API que cria o vídeo e retorna a URL.  
5. Ajuste as integrações de API conforme suas chaves.  

## Deploy

- Pode usar Render.com ou Railway.app para backend Python.  
- Pode usar GitHub Pages para frontend.  

---
