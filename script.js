function burstColors() {

    // Play Music
    document.getElementById("bgMusic").play();

    // Color Splash
    for (let i = 0; i < 120; i++) {
        createColor(Math.random() * window.innerWidth);
    }

    // Firework
    createFirework();
}

function createColor(leftPosition) {
    const color = document.createElement("div");
    color.classList.add("color");

    color.style.left = leftPosition + "px";
    color.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 50%)";

    document.body.appendChild(color);

    setTimeout(() => {
        color.remove();
    }, 3000);
}

function createFirework() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;

    for (let i = 0; i < 30; i++) {
        const fire = document.createElement("div");
        fire.classList.add("firework");

        fire.style.left = x + "px";
        fire.style.top = y + "px";
        fire.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.remove();
        }, 1000);
    }
}
