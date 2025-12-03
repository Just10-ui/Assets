
function OpenTabs(event, tabs) {
  const tabLinks = document.querySelectorAll('.tablink');
  const tabContent = document.querySelectorAll('.tabcontent');

  tabLinks.forEach(tablink => {
    tablink.classList.remove('active');
  });

  tabContent.forEach(tabcontent => {
    tabcontent.style.display = 'none';
  });

  document.getElementById(tabs).style.display = 'block';
  event.currentTarget.classList.add('active');
}