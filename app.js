// page scroll//
const pageLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const section = document.querySelector(pageLinks[i].hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
}
  
