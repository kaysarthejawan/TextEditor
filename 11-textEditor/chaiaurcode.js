const Input = document.querySelector('#input-field');
const ABC = document.querySelector('.btn.uppercase');
const abc = document.querySelector('.btn.lowercase');
const Abc = document.querySelector('.btn.capitalize');
const Bold = document.querySelector('.btn.bold');
const Italic = document.querySelector('.btn.italic');
const UnderLine = document.querySelector('.btn.underline');
const output = document.querySelector('#output-field');

ABC.addEventListener('click', function () {
  output.innerHTML=Input.value
  output.style.textTransform = 'uppercase';
});
abc.addEventListener('click', function () {
  output.innerHTML=Input.value
  output.style.textTransform = 'lowercase';
});
Abc.addEventListener('click', function () {
  output.innerHTML=Input.value
  output.style.textTransform = 'capitalize';
});
Bold.addEventListener('click', function () {
  output.textContent=Input.value
  output.style.fontWeight = 'bold';
});
Italic.addEventListener('click', function () {
  output.innerHTML=Input.value
  output.style.fontStyle = 'italic';;
});
UnderLine.addEventListener('click', function () {
  output.innerHTML=Input.value
  output.style.textDecoration = 'underline';
});

