<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yangyang Intro</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      background: #f0f0f0;
      box-sizing: border-box;
    }

    .circle-img {
      width: 40vw;
      max-width: 200px;
      height: 40vw;
      max-height: 200px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid navy;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      margin-bottom: 16px;
    }

    .circle-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .speech-bubble {
      position: relative;
      background: white;
      border: 2px solid navy;
      border-radius: 16px;
      padding: 14px 18px;
      max-width: 90vw;
      font-size: 4vw;
      line-height: 1.5;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      color: navy;
      display: none;
      text-align: center;
    }

    @media (min-width: 500px) {
      .speech-bubble {
        font-size: 16px;
        max-width: 400px;
      }
    }

    .speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 30px;
      border: 8px solid transparent;
      border-top-color: white;
    }

    .speech-bubble-border::after {
      border-top-color: navy;
      bottom: -19px;
    }

    #text {
      white-space: pre-wrap;
    }

    #playBtn {
      padding: 10px 20px;
      background-color: navy;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 12px;
    }

    #playBtn:hover {
      background-color: #001f4d;
    }
  </style>
</head>
<body>

  <!-- Gambar Bulat -->
  <div class="circle-img">
    <img src="https://i.pinimg.com/736x/53/c1/d3/53c1d3efe10687dc9ff065385f1c1a30.jpg" alt="Yangyang">
  </div>

  <!-- Tombol untuk memulai -->
  <button id="playBtn">Who are you?</button>

  <!-- Bubble Teks -->
  <div class="speech-bubble speech-bubble-border" id="bubble">
    <div id="text"></div>
  </div>

  <!-- Audio -->
  <audio id="voice" preload="auto">
    <source src="https://static.wikia.nocookie.net/wutheringwaves/images/5/5c/Yangyang_Self_Introduction.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>

  <!-- Script -->
  <script>
    const msg = "Today is very special. It's your big day. So... *clears throat* happy birthday to you, happy birthday to you, happy birthday to you... Rover, I hope I can sing for you on your birthday this year, then your next birthday, and then the birthday after your next birthday.";
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
          setTimeout(type, speed);
        }
      }
      type();
    }

    playBtn.addEventListener('click', () => {
      audio.play().catch(console.warn); // Required user interaction
      bubble.style.display = 'block';
      typeWriter(msg, textContainer);
      playBtn.style.display = 'none';
    });
  </script>

</body>
</html>
