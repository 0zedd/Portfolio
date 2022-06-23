/* eslint-disable linebreak-style */
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

const button0 = document.querySelector('.button0');
const jsdetails = document.querySelector('.jsdetails');
const xman = document.querySelector('.xman');

button0.addEventListener('click', () => {
  button0.classList.toggle('active');
  jsdetails.classList.toggle('active');
});

xman.addEventListener('click', () => {
  jsdetails.classList.toggle('active');
});

const deskbtn = document.querySelector('#deskbtn');
const detaildsk = document.querySelector('.detaildsk');
const desk = document.querySelector('.desk');

deskbtn.addEventListener('click', () => {
  deskbtn.classList.toggle('active');
  detaildsk.classList.toggle('active');
});

desk.addEventListener('click', () => {
  detaildsk.classList.toggle('active');
});
