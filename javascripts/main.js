function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  }());
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  }());
}

function handleCaseStudyNav() {
  const caseStudyNav = document.getElementById('case-study-nav');
  const caseStudyNavVisible = () => window.pageYOffset >= 700;

  /**
   * Handles Showing/Hiding Navbar
   */
  const handleNavVisiblity = () => {
    if (caseStudyNavVisible()) {
      if (+caseStudyNav.style.opacity < 1) {
        fadeIn(caseStudyNav);
      }

      return;
    }

    if (+caseStudyNav.style.opacity > 0) {
      fadeOut(caseStudyNav);
    }
  };

  /**
   * Handles highlighting the nav's current section based
   * on current screen location.
   */
  const caseStudyTitles = document.querySelectorAll('.case-study-h1');
  let activeLi;
  const handleNavActive = async () => {
    caseStudyTitles.forEach((title, idx) => {
      if (window.pageYOffset >= title.offsetTop - 10) {
        if (activeLi) activeLi.classList.remove('active');

        activeLi = caseStudyNav
          .children[0] // ul
          .children[idx]; // li

        activeLi.classList.add('active');
      }
    });
  };

  document.addEventListener('scroll', () => {
    handleNavVisiblity();
    if (caseStudyNavVisible()) { handleNavActive(); }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleCaseStudyNav();
});
