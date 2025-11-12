const checkbox = document.getElementById("checkbox");
const container = document.getElementById("container");

function updateTheme () {
  if (checkbox.checked) {
    container.style.backgroundColor = "#262525ff";
  } else {
    container.style.backgroundColor = "#fff";
  }
};

updateTheme();

checkbox.addEventListener('change', updateTheme);