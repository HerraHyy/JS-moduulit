'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

// Create option elements and add them to the select element
const johnOption = document.createElement('option');
johnOption.value = '2345768';
johnOption.textContent = 'John';
target.appendChild(johnOption);

const paulOption = document.createElement('option');
paulOption.value = '2134657';
paulOption.textContent = 'Paul';
target.appendChild(paulOption);

const jonesOption = document.createElement('option');
jonesOption.value = '5423679';
jonesOption.textContent = 'Jones';
target.appendChild(jonesOption);

let optionsHtml = '';
for (const student of students) {
  optionsHtml += `<option value="${student.id}">${student.name}</option>`;
}

target.innerHTML = optionsHtml;

const names = ['John', 'Paul', 'Jones'];
const list = document.createElement('ul');

list.innerHTML = names.map(name => `<li>${name}</li>`).join('');