export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    let player: HTMLElement | null = document.querySelector('#movie_player');

    const observer = new MutationObserver(() => {
      if (!player) {
        player = document.querySelector('#movie_player');
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('focus', () => {
      if (!player) {
        player = document.querySelector('#movie_player');
      }
      player?.focus();
    });
  },
});
