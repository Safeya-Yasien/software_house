const navigationLinksList = document.querySelector(".navigation-links");
const navigationLinks = document.querySelectorAll(".nav-link");
const menuBar = document.querySelector(".menu-bar");
const cards = document.querySelectorAll(".services .card"),
  controls = document.querySelector(".controls");

menuBar.addEventListener("click", showMenu);

function showMenu() {
  navigationLinksList.classList.toggle("show");
}

function removActiveClass() {
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      link.classList.add("active");
    });
  });
}

function intializeControls() {
  cards.forEach((card, index) => {
    const controlItem = document.createElement("li");
    controlItem.addEventListener("click", () => {
      setActiveControl(index);
      setActiveCard(index);
      scrollToCard(card);
    });
    card.addEventListener("click", () => {
      setActiveControl(index);
      setActiveCard(index);
    });
    controls.appendChild(controlItem);
  });

  setActiveControl(1);
}

function setActiveControl(index) {
  const controlItems = document.querySelectorAll(".controls li");

  controlItems.forEach((item, i) => {
    if (index === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function setActiveCard(index) {
  cards.forEach((card, i) => {
    if (index === i) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function scrollToCard(card) {
  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

removActiveClass();
intializeControls();
