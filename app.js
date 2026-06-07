const sidebar = document.getElementById("sidebar");

document.getElementById("menuBtn").onclick = () => {
    sidebar.classList.toggle("open");
};

const particles = document.getElementById("particles");

for(let i=0;i<80;i++){

    const p = document.createElement("div");

    p.className = "particle";

    const size = Math.random()*12+4;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.left = Math.random()*100+"%";

    p.style.animationDuration =
        (Math.random()*15+10)+"s";

    p.style.animationDelay =
        (-Math.random()*20)+"s";

    particles.appendChild(p);
}
