function handleCaseStudyNav() {
  const caseStudyNav = document.getElementById('case-study-nav');
  const caseStudyNavVisible = () => 700 <= window.pageYOffset;

  document.addEventListener('scroll', () => {
    if (caseStudyNavVisible()) {
      caseStudyNav.style.visibility = 'visible';
      return;
    }

    caseStudyNav.style.visibility = 'hidden';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleCaseStudyNav();
});
