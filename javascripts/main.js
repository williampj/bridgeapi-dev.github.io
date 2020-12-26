function handleCaseStudyNav() {
  const caseStudyNav = document.getElementById('case-study-nav');
  const caseStudyNavVisible = () => window.pageYOffset >= 700;

  /**
   * Handles Showing/Hiding Navbar
   */
  const handleNavVisiblity = () => {
    if (caseStudyNavVisible()) {
      caseStudyNav.style.visibility = 'visible';
      return;
    }

    caseStudyNav.style.visibility = 'hidden';
  };

  const caseStudyTitles = document.querySelectorAll('.case-study-h1');
  let activeLi;
  const handleNavActive = async () => {
    caseStudyTitles.forEach((title, idx) => {
      if (
        window.pageYOffset >= title.offsetTop - 10
        && window.pageYOffset <= caseStudyTitles[idx + 1].offsetTop
      ) {
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
    handleNavActive();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleCaseStudyNav();
});
