function createPetals() {
  const container = document.getElementById('petals');
  for (let i = 0; i < 8; i++){
    const petal = document.createElement('div');

    petal.className = 'heart';
    petal.innerHTML = '❤️';

    petal.style.color = Math.random() > 0.5 ? '#ff4d6d' : '#c9a84c';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (6 + Math.random() * 6) + 's'; // slow
    petal.style.animationDelay = (Math.random() * 6) + 's';
    petal.style.fontSize = (10 + Math.random() * 12) + 'px'; // small

    container.appendChild(petal);
  }
}

// Open invitation - FIXED (fast + smooth)
function openInvitation() {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  const musicBtn = document.getElementById('music-btn');
  const music = document.getElementById('bg-music');

  splash.classList.add('curtain-open');

  // MAIN जल्दी दिखे
  setTimeout(() => {
    main.classList.add('visible');
    musicBtn.style.display = 'block';
    document.body.style.overflow = 'auto';

    // 🔥 AUTO PLAY MUSIC
    music.play();
    musicBtn.classList.add('playing');
    musicBtn.textContent = '🎶';
    musicPlaying = true;

  }, 600);

  // 🔥 INTRO TEXT जल्दी fade
  setTimeout(() => {
    const intro = document.getElementById('intro-text');
    if (intro) {
      intro.style.opacity = '0';
      setTimeout(() => intro.style.display = 'none', 500);
    }
  }, 800);

  // 🔥 SPLASH fade
  setTimeout(() => {
    splash.style.opacity = '0';
  }, 700);

  // 🔥 SPLASH remove (no delay issue)
  setTimeout(() => {
    splash.style.display = 'none';
  }, 1200);
}

// RSVP submit
function submitRSVP() {
  const name = document.getElementById('rsvp-name').value;
  const guests = document.getElementById('rsvp-guests').value;
  const attending = document.querySelector('input[name="attending"]:checked').value;

  if (!name.trim()) {
    alert('Please Enter Your Name');
    return;
  }

  const message = `Wedding RSVP

Name: ${name}
Guests: ${guests}
Attending: ${attending}`;

  const phoneNumber = "918757109220";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
}

// 🎵 Music control
let musicPlaying = false;
const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');

btn.addEventListener('click', function() {
  musicPlaying = !musicPlaying;

  if (musicPlaying) {
    music.play();
    btn.classList.add('playing');
    btn.textContent = '🎶';
  } else {
    music.pause();
    btn.classList.remove('playing');
    btn.textContent = '🎵';
  }
});

// Init
createPetals();
document.body.style.overflow = 'hidden';