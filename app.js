// page scroll//
const pageLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const section = document.querySelector(pageLinks[i].hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
}
  

// //modal//
// const openBtn = document.getElementById('openModal');
// const modal = document.getElementById('exampleModal')
// const close = document.getElementById('close')

// const openModal = () => {
//   modal.style.display = 'block';
// }

// const closeModal = () => {
//   modal.style.display = 'none'
// }

// openBtn.addEventListener('click', openModal);
// close.addEventListener('click', closeModal);


