const links = document.querySelectorAll('.tablink');

function active(event) {
  const content = document.querySelectorAll('.tabcontent');
  const array = Array.from(links);
  const i = array.indexOf(event.currentTarget);

  content.forEach(cont => {
    cont.style.display = 'none';
  });

  content[i].style.display = 'block';

  links.forEach(link => {
    link.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}

links.forEach(link => {
  link.addEventListener('click', active);
})