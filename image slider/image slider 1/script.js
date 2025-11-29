const image = document.querySelectorAll('.image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let num = 1;
let index = 0;

function nextSlide() {
  if (index < image.length - 1) {
    index += 1;
    num = index * -106;
  }

  for (let i = 0; i < image.length; i++) {
    image[i].style.transform = `translate(${num}%)`;
  }
}

function prevSlide() {
  if (index > 0) {
    index -= 1;
    num += 106;
  }

  for (let i = 0; i < image.length; i++) {
    image[i].style.transform = `translate(${num}%)`;
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);