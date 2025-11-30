const btns = document.querySelectorAll('.accordion');

for (const btn of btns) {
  btn.addEventListener('click', active);
}

for (const btn of btns) {
  if (btn.className.match('active')) {
    console.log('active');
  }
}

function active(event) {
  event.target.classList.toggle('active');
}