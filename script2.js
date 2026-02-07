const song=document.getElementById("accepted");

const tl=gsap.timeline({
    repeat:-1
});

tl.to("#emoji", { scale: 1.08, duration: 0.15 })
  .to("#emoji", { scale: 1, duration: 0.15 })
  .to("#emoji", { scale: 1.08, duration: 0.15 })
  .to("#emoji", { scale: 1, duration: 0.78 });

  //song
  document.body.addEventListener(
  "click",
  () => {
    song.play();
  },
  { once: true }
);

//fountain
const emojiLayer = document.getElementById("emoji-layer");
const emojis = ["🌹", "🌹", "🌹", "🌹"];

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