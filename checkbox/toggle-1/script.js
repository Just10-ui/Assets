const checkbox = document.getElementById("checkbox");
const container = document.getElementById('container');
const toggleSwitch = document.querySelector('.toggle-switch');

function updateTheme () {
  if (checkbox.checked) {
    container.style.backgroundColor = "#262525ff";
    document.querySelector('.sun').style.opacity = 1;
    document.querySelector('.moon').style.opacity = 0;
    toggleSwitch.style.backgroundColor = '#fff';
    toggleSwitch.style.border = '1px solid #000';
    toggleSwitch.style.color = '#000';
    document.getElementById('toggle-border').style.border = '1px solid #e4e1e1ff';
    document.getElementById('toggle-border').style.backgroundColor = '#fff';
  } else {
    container.style.backgroundColor = "#fff";
    document.querySelector('.sun').style.opacity = 0;
    document.querySelector('.moon').style.opacity = 1;
    toggleSwitch.style.backgroundColor = '#000';
    toggleSwitch.style.border = '1px solid #fff';
    toggleSwitch.style.color = '#fff';
    document.getElementById('toggle-border').style.border = '1px solid #000';
    document.getElementById('toggle-border').style.backgroundColor = '#000';
  }
};

updateTheme();

checkbox.addEventListener('change', updateTheme);