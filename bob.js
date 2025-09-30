const msg = "Today is very special. It's your big day. So... *clears throat* happy birthday to you, happy birthday to you, happy birthday to you... Rover, I hope I can sing for you on your birthday this year, then your next birthday, and then the birthday after your next birthday.";

const splitIndex = msg.indexOf("Rover, I hope I can sing");
const part1 = msg.slice(0, splitIndex); // 0–17 detik
const part2 = msg.slice(splitIndex);    // 18–29 detik

const audio = document.getElementById('voice');
const playBtn = document.getElementById('playBtn');
const bubble = document.getElementById('bubble');
const textContainer = document.getElementById('text');

function typeWriter(text, container, totalDuration, append = false) {
  let i = 0;
  const speed = totalDuration / text.length;
  if (!append) container.textContent = '';

  function type() {
    if (i < text.length) {
      container.textContent += text.charAt(i++);
      setTimeout(type, speed);
    }
  }
  type();
}

playBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play().catch(console.warn);
  bubble.style.display = 'block';
  playBtn.style.display = 'none';

  // Part 1: 17 detik
  typeWriter(part1, textContainer, 17000);

  // Jeda 1 detik, lalu lanjutkan part 2 selama 11 detik
  setTimeout(() => {
    typeWriter(part2, textContainer, 11000, true); // append = true
  }, 18000);
});
