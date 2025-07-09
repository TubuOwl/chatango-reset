const msg = "Today is very special. It's your big day. So... *clears throat* happy birthday to you, happy birthday to you, happy birthday to you... Rover, I hope I can sing for you on your birthday this year, then your next birthday, and then the birthday after your next birthday.";

const audio = document.getElementById('voice');
const playBtn = document.getElementById('playBtn');
const bubble = document.getElementById('bubble');
const textContainer = document.getElementById('text');

function typeWriter(text, container, speed = 29000 / text.length) {
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
