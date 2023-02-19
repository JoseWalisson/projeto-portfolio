let menuItems = document.querySelectorAll('#container li a');

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (event) {
    event.preventDefault();

    let section = document.querySelector(this.getAttribute('href'));
    let sectionTop = section.offsetTop;
    let scrollY = window.scrollY;
    let distance = sectionTop - scrollY;
    let time = 1200;
    let startingTime;

    function step(timestamp) {
      if (!startingTime) startingTime = timestamp;
      let progress = timestamp - startingTime;
      let percentage = progress / time;

      window.scrollTo(0, scrollY + distance * percentage);

      if (progress < time) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  });
});