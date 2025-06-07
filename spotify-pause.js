
(() => {
  const tryPause = () => {
    let pauseBtn = document.querySelector('[data-testid="control-button-pause"]');

    if (!pauseBtn) {
      // Fallback for potential class-based or icon-based detection
      const buttons = document.querySelectorAll('button');
      for (let btn of buttons) {
        if (btn.innerHTML.includes('<svg') && btn.getAttribute('aria-label') === 'Pause') {
          pauseBtn = btn;
          break;
        }
      }
    }

    if (pauseBtn) {
      pauseBtn.click();
      console.log("Spotify paused via extension.");
    } else {
      console.warn("Spotify pause button not found.");
    }
  };

  // Retry a few times in case button hasn't rendered
  let attempts = 0;
  const max = 5;
  const interval = setInterval(() => {
    if (++attempts > max) return clearInterval(interval);
    tryPause();
  }, 400);
})();
