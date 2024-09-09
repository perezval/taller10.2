const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', () => {
  const data = inputText.value;
  localStorage.setItem('userData', data);
});