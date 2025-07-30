// Telegram WebApp API
const tg = window.Telegram.WebApp;
tg.ready();

try {
  tg.expand();
} catch (e) {
  console.warn("Не удалось expand():", e);
}

window.addEventListener('load', () => {
  const el = document.documentElement;

  try {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } catch (e) {
    console.warn('Не удалось войти в fullscreen:', e);
  }

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch((err) => {
      console.warn('Не удалось зафиксировать ориентацию:', err);
    });
  }
});

document.addEventListener('fullscreenchange', () => {
  console.log('Telegram expanded:', tg.isExpanded);
  console.log('Fullscreen элемент:', document.fullscreenElement);
});
