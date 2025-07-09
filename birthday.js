const msg = "Today is very special. It's your big day. So... *clears throat* happy birthday to you, happy birthday to you, happy birthday to you... Rover, I hope I can sing for you on your birthday this year, then your next birthday, and then the birthday after your next birthday.";

const splitIndex = msg.indexOf("Rover, I hope I can sing");
const firstPart = msg.slice(0, splitIndex); // durasi 18 detik
const secondPart = msg.slice(splitIndex);   // durasi 9 detik

const audio = document.getElementById('voice');
const playBtn = document.getElementById('playBtn');
const bubble = document.getElementById('bubble');
const textContainer = document.getElementById('text');

let typingTimeouts = [];

function typeWriter(text, container, totalDuration, append = false) {
  let i = 0;
  const speed = totalDuration / text.length;
  if (!append) container.textContent = '';

  function type() {
    if (i < text.length) {
      container.textContent += text.charAt(i++);
      typingTimeouts.push(setTimeout(type, speed));
    }
  }
  type();
}

playBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play().catch(console.warn);
  bubble.style.display = 'block';
  playBtn.style.display = 'none';

  // Bagian pertama diketik dalam 18 detik (18000ms)
  typeWriter(firstPart, textContainer, 18000);

  // Hentikan ketikan saat jeda (tidak perlu clearTimeout karena typing sudah selesai di detik 18)
  setTimeout(() => {
    audio.pause();
  }, 18000);

  // Lanjutkan bagian kedua setelah jeda 2 detik (pada detik ke-20)
  setTimeout(() => {
    audio.play().catch(console.warn);
    typeWriter(secondPart, textContainer, 9000, true); // 9 detik sisa, append = true
  }, 20000);
});
