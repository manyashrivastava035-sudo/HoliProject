function burstColors() {
    for (let i = 0; i < 120; i++) {
        createColor(Math.random() * window.innerWidth);
    }
    createFirework();
}

function createColor(xPosition) {
    let color = document.createElement("div");
    color.classList.add("color");

    let colors = ["#ff4e50", "#fc913a", "#f9d423", "#00c9ff", "#92fe9d", "#ff00de"];
    color.style.background = colors[Math.floor(Math.random() * colors.length)];
    color.style.left = xPosition + "px";
    color.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(color);

    setTimeout(() => {
        color.remove();
    }, 4000);
}

// Mouse splash
document.addEventListener("mousemove", function(e) {
    createColor(e.pageX);
});

// Firework creator
function createFirework() {
    let firework = document.createElement("div");
    firework.classList.add("firework");

    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * (window.innerHeight / 2) + "px";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}
