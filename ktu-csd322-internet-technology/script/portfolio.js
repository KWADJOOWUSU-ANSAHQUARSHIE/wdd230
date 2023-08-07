const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-Ul');

hamburger.addEventListener('click' , () => {
  navUl.classList.toggle('show');
});

const currentDateSpan = document.querySelector("#currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);
