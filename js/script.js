window.addEventListener('load', function() {
  const originalHeader = document.querySelector('.original-header');
  const scrolledHeader = document.querySelector('.scrolled-header');

  function updateHeaderState() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      originalHeader.classList.add('hide');
      scrolledHeader.classList.add('show');
    } else {
      originalHeader.classList.remove('hide');
      scrolledHeader.classList.remove('show');
    }
  }

  window.addEventListener('scroll', updateHeaderState);

  function scrollToReviewSection() {
    const targetSection = document.getElementById('review-section');
    let headerHeight = 0;

    updateHeaderState();

    if (originalHeader && !originalHeader.classList.contains('hide')) {
      headerHeight = originalHeader.offsetHeight;
    } else if (scrolledHeader && scrolledHeader.classList.contains('show')) {
      headerHeight = scrolledHeader.offsetHeight;
    }

    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }

  if (window.location.hash === '#review-section') {
    setTimeout(scrollToReviewSection, 0);
  }

  const scrollButtons = document.querySelectorAll('.scroll-to-review-button');
  scrollButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToReviewSection();
    });
  });
});