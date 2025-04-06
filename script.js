const container = document.querySelector('.container1');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
  container.scrollBy({ left: 600, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});
function togglemenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}