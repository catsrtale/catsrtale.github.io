// Função para exibir imagens com efeito fade
function showImage(imageNumber) {
    const photoDisplay = document.getElementById("photo-display");
    if (imageNumber === 1) {
        photoDisplay.src = "/photo1.jpg"; // Caminho da foto 1
    } else if (imageNumber === 2) {
        photoDisplay.src = "/photo2.jpg"; // Caminho da foto 2
    }
    photoDisplay.style.display = "block";
    photoDisplay.style.opacity = 1;
}

// Função para ativar o "Modo Rock Show"
function toggleRockShow() {
    document.body.classList.toggle('rock-show');

    // Ativar fogos de artifício e luzes piscando
    const fireworks = document.getElementById("fireworks");
    const lightShow = document.getElementById("light-show");

    if (document.body.classList.contains('rock-show')) {
        fireworks.style.display = 'block';
        lightShow.style.display = 'block';
        startFireworks();
    } else {
        fireworks.style.display = 'none';
        lightShow.style.display = 'none';
        stopFireworks();
    }
}

// Função para gerar fogos de artifício
function startFireworks() {
    const fireworksContainer = document.getElementById("fireworks");
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

function stopFireworks() {
    const fireworksContainer = document.getElementById("fireworks");
    fireworksContainer.innerHTML = '';
}
