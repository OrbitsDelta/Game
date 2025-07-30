const tg = window.Telegram.WebApp;
tg.ready();

try {
  tg.expand(); // Расширяет WebApp, если возможно
} catch (e) {
  console.warn("Не удалось expand():", e);
}

document.getElementById('btnFull').addEventListener('click', () => {
  const el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('В обычный браузерный fullscreen вошли');
  } else {
    console.log('Выход из fullscreen');
  }
});
