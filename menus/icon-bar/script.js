const collection = document.getElementsByTagName('a');

function active (event) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].removeAttribute('id');
  }

  event.currentTarget.setAttribute('id', 'active');
}

for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener('click', active);
}