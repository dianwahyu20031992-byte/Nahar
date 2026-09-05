function nextStep(stepNumber) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + stepNumber).classList.add('active');
  
  // Putar musik saat klik pertama
  document.getElementById('bg-music').play();
}

// Logika menahan tombol Hati
let percent = 0;
let timer;
const heartBtn = document.getElementById('heart-btn');

heartBtn.addEventListener('mousedown', startCount);
heartBtn.addEventListener('mouseup', stopCount);
heartBtn.addEventListener('touchstart', startCount);
heartBtn.addEventListener('touchend', stopCount);

function startCount() {
  timer = setInterval(() => {
    if (percent < 100) {
      percent++;
      document.getElementById('percent').innerText = percent + '%';
    } else {
      clearInterval(timer);
      alert('You Filled My Heart ❤️');
      // Lanjut ke galeri
    }
  }, 30);
}

function stopCount() {
  clearInterval(timer);
}
