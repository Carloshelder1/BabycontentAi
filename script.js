
document.getElementById('generate-btn').addEventListener('click', () => {
    const statusEl = document.getElementById('status');
    statusEl.textContent = 'Gerando vídeo... Aguarde...';

    fetch('/run_pipeline')
        .then(response => response.json())
        .then(data => {
            statusEl.textContent = 'Vídeo gerado e postado!';
            const videoList = document.getElementById('video-list');

            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            const videoElem = document.createElement('video');
            videoElem.controls = true;
            videoElem.src = data.video_url || '#';
            videoItem.appendChild(videoElem);
            videoList.appendChild(videoItem);
        })
        .catch(err => {
            statusEl.textContent = 'Erro ao gerar vídeo.';
            console.error(err);
        });
});
