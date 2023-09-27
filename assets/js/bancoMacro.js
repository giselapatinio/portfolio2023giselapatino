/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    lightTheme
  );
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
  imageHandler();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
  imageHandler();
});

/*=============== Image Handlers ===============*/

function imageHandler() {
  const processImg = document.getElementById('process-img');
  const painPointsImg = document.getElementById('pain-points-img');

  if (getCurrentTheme() === 'light') {
    painPointsImg.src = 'assets/img/project-macro-2-dark.png';
    if (window.innerWidth <= 768) {
      processImg.src = 'assets/img/process-dark-mobile.png';
    } else {
      processImg.src = 'assets/img/process-dark.png';
    }
  } else {
    painPointsImg.src = 'assets/img/project-macro-2.png';
    if (window.innerWidth <= 768) {
      processImg.src = 'assets/img/process-mobile.png';
    } else {
      processImg.src = 'assets/img/project-macro-3.png';
    }
  }
}
imageHandler();

window.addEventListener('resize', imageHandler);
