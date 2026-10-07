const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const disabledLinks = document.querySelectorAll('a[aria-disabled="true"]');
disabledLinks.forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
