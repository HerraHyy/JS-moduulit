const img = document.getElementById('target');
const p = document.getElementById('trigger');

p.addEventListener('mouseover', () => {
  img.src = 'img/picB.jpg';
});

p.addEventListener('mouseout', () => {
  img.src = 'img/picA.jpg';
});