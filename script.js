const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const moreMenu = document.querySelector(".more-menu");
const moreToggle = document.querySelector(".more-toggle");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("open", !isExpanded);
});

moreToggle.addEventListener("click", () => {
  const isExpanded = moreToggle.getAttribute("aria-expanded") === "true";
  moreToggle.setAttribute("aria-expanded", String(!isExpanded));
  moreMenu.classList.toggle("open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    moreMenu.classList.remove("open");
    moreToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
