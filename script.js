const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".more-menu");
const menuDropdownButton = document.querySelector(".more-toggle");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
  navigation.classList.toggle("open", !isOpen);
});

menuDropdownButton.addEventListener("click", () => {
  const isOpen = menuDropdownButton.getAttribute("aria-expanded") === "true";

  menuDropdownButton.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menu.classList.remove("open");
    menuDropdownButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#current-year").textContent = String(
  new Date().getFullYear(),
);
