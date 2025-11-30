const links = document.querySelectorAll('.tablink');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', active);
}

function active(event) {
  const array = Array.from(links);
  const index = array.indexOf(event.currentTarget);
  const content = document.querySelectorAll('.tabcontent');

  for (const contents of content) {
    contents.style.display = 'none';
  }

  content[index].style.display = 'block';
}