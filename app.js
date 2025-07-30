// ==== Telegram WebApp API ====
const tg = window.Telegram.WebApp;
tg.ready();

try {
  tg.expand(); // Расширяет WebApp в Telegram
} catch (e) {
  console.warn("Не удалось expand():", e);
}

// ==== Попытка fullscreen при загрузке ====
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

  // Попытка зафиксировать ориентацию
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch((err) => {
      console.warn('Не удалось зафиксировать ориентацию:', err);
    });
  }
});

// ==== Обработка события изменения fullscreen ====
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('Вошли в обычный fullscreen');
  } else {
    console.log('Вышли из fullscreen');
  }

  console.log('Telegram expanded:', tg.isExpanded);
});
