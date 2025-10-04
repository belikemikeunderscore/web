  document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typed-text', {
      strings: ['emoção', 'convívio', 'ação', 'jogos', 'diversão', 'competição', 'intensidade', 'torneios'],  // list of words you want
      typeSpeed: 100,        // ms per character typing
      backSpeed: 100,         // ms per character deleting
      backDelay: 1500,       // wait 1.5s before deleting
      loop: true,            // keep looping
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true   // only delete what differs between strings
    });
  });