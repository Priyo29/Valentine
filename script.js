// gsap.to("#placard", {
//   scale: 1.08,
//   duration: 0.15,
//   repeat: -1,
//   yoyo: true,
//   repeatDelay: 0.15,
//   ease: "power1.inOut"
// });

const heart_sound= document.getElementById("heartbeat");


const tl = gsap.timeline({ 
    repeat:-1,

    onRepeat:()=>{
        heart_sound.currentTime=0,
        heart_sound.play();
    },
 });

tl.pause();

document.body.addEventListener("click", () => {
  heart_sound.play().catch(() => {});
  tl.play();
}, { once: true });

tl.to("#placard", { scale: 1.08, duration: 0.15 })
  .to("#placard", { scale: 1, duration: 0.15 })
  .to("#placard", { scale: 1.08, duration: 0.15 })
  .to("#placard", { scale: 1, duration: 0.78 });


//button drifter
const btn = document.getElementById("no");

btn.addEventListener("mouseenter", () => {
  gsap.to(btn, {
    x: gsap.utils.random(-150, 150),
    y: gsap.utils.random(-150, 10),
    duration: 0.5,
    ease: "power2.out"
  });
});

//yes
const Clicked_yes = document.getElementById("yes");

Clicked_yes.addEventListener("click", () => {
  window.location.href = "yes.html";
});

//fountain
const emojiLayer = document.getElementById("emoji-layer");
const emojis = ["❤️", "🌹", "💖", "💕"];

function spawnEmoji() {
  const span = document.createElement("span");
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  span.style.position = "absolute";
  span.style.left = Math.random() * 100 + "%";
  span.style.bottom = "30px";
  span.style.fontSize = "28px";
  span.style.opacity = "0.9";

  emojiLayer.appendChild(span);

  gsap.fromTo(
    span,
    { y: 0, scale: 3 },
    {
      y: -260,
      x: gsap.utils.random(-80, 80),
      scale: 1.2,
      opacity: 0,
      duration: gsap.utils.random(2.2, 3),
      ease: "power1.out",
      onComplete: () => span.remove()
    }
  );
}

setInterval(spawnEmoji, 350);



