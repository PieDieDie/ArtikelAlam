document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
  const toggleMusicBtn = document.getElementById("toggleMusic");
  const body = document.body;
  const music = document.getElementById("bgMusic");

  // Dark mode toggle
  toggleDarkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  // Music control
  toggleMusicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleMusicBtn.textContent = "Pause Music";
    } else {
      music.pause();
      toggleMusicBtn.textContent = "Play Music";
    }
  });
});
