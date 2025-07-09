const msg = "I am Yangyang, a temporary Outrider of the Midnight Rangers, responsible for detecting and investigating anomalies. The Streams have guided me to you. I have a feeling we'll be companions for many moons to come.";

const audio = document.getElementById('voice');
const playBtn = document.getElementById('playBtn');
const bubble = document.getElementById('bubble');
const textContainer = document.getElementById('text');

function typeWriter(text, container, speed = 15000 / text.length) {
  let i = 0;
  container.textContent = '';
  function type() {
    if (i < text.length) {
      container.textContent += text.charAt(i++);
      window["\u0073\u0065\u0074\u0054\u0069\u006D\u0065\u006F\u0075\u0074"](type, speed);
    }
  }
  type();
}

playBtn.addEventListener('click', () => {
  audio.play().catch(console.warn);
  bubble.style.display = 'block';
  typeWriter(msg, textContainer);
  playBtn.style.display = 'none';
});
