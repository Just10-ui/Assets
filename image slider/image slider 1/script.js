const image = document.querySelectorAll('.image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let num = 0;

function nextSlide() {
  if (num > -212) {
    num += -106;
  } else {
    num += 0;
  }

  for (let i = 0; i < image.length; i++) {
    image[i].style.transform = `translate(${num}%)`;
  }
}

function prevSlide() {
  if (num < 0) {
    num += 106;
  } else {
    num += 0;
  }

  for (let i = 0; i < image.length; i++) {
    image[i].style.transform = `translate(${num}%)`;
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);