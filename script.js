const btn = document.getElementById("celebrateBtn");

// Create a new Audio object dynamically inside click
btn.addEventListener("click", () => {
    const music = new Audio("holi.mp3");
    music.loop = true;
    music.volume = 1.0;

    // Try to play music after button click
    music.play().then(() => {
        console.log("Music started ✅");
    }).catch(err => {
        console.log("Music blocked:", err);
    });

    // Fireworks + color splash
    for (let i = 0; i < 120; i++) createColor(Math.random() * window.innerWidth);
    createFirework();
});

function createColor(left) {
    const c = document.createElement("div");
    c.className = "color";
    c.style.left = left + "px";
    c.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
}

function createFirework() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;
    for (let i = 0; i < 40; i++) {
        const f = document.createElement("div");
        f.className = "firework";
        f.style.left = x + "px";
        f.style.top = y + "px";
        f.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1000);
    }
}
