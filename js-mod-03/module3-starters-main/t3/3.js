'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

target.innerHTML = names.map(name => `<li>${name}</li>`).join('');
