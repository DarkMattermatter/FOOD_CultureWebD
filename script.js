document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  // Smooth scrolling effect for anchor links
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
