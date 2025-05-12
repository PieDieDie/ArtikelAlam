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
      toggleMusicBtn.textContent = "MAMPUS KONTOL";
    } else {
      music.pause();
      toggleMusicBtn.textContent = "WKWK PANIK";
    }
  });
});
