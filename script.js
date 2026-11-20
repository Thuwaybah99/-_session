// Minimal client-side interactions: video players and photo lightbox.
document.querySelectorAll('[data-play]').forEach(button => {
  button.addEventListener('click', () => {
    const stage = button.closest('[data-video]');
    const id = stage.dataset.video;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    player.title = 'YouTube project or community video';
    player.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    stage.replaceChildren(player);
  });
});
const dialog = document.getElementById('photo-dialog');
const large = document.getElementById('photo-large');
document.querySelectorAll('.photo-open').forEach(button => {
  button.addEventListener('click', () => {
    const photo = button.querySelector('img');
    large.src = photo.currentSrc || photo.src;
    large.alt = photo.alt || 'Beyond analytics photograph';
    if (dialog.showModal) dialog.showModal();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
