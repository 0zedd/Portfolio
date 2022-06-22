const menuim = document.querySelector('.menuim');
const navexpand = document.querySelector('.nav_expand');
const iconx = document.querySelector('.iconx');
const abt = document.querySelector('#abt');
const con = document.querySelector('#con');
const por = document.querySelector('#por');

menuim.addEventListener('click', () => {
  menuim.classList.toggle('active');
  navexpand.classList.toggle('active');
});

iconx.addEventListener('click', () => {
  navexpand.classList.toggle('active');
});

abt.addEventListener('click', () => {
  navexpand.classList.toggle('active');
});

con.addEventListener('click', () => {
  navexpand.classList.toggle('active');
});

por.addEventListener('click', () => {
  navexpand.classList.toggle('active');
});
