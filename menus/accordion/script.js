const btns = document.querySelectorAll('.accordion');

for (const btn of btns) {
  btn.addEventListener('click', active);
}

function active(event) {
  event.currentTarget.classList.toggle('active');

  const panel = event.currentTarget.nextElementSibling;
  if (event.currentTarget.className.includes('active')) {
    panel.style.height = '10vh';
  } else {
    panel.style.height = 0;
  }
}