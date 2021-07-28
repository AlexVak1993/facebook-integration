// drop-select activator
function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === "none" || curDisplayStyle === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector(".dropdown__menu");
  const icon = dropdown.querySelector(".dropdown__icon");

  menu.classList.remove("hided");
  toggleClass(menu, "menu--hide");
  toggleClass(icon, "rotate-90");
}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, "menu--hide");

  const id = e.target.id;
  const newValue = e.target.textContent + " ";
  const titleElem = document.querySelector(".dropdown .dropdown__title");
  const icon = document.querySelector(
    ".dropdown .dropdown__title .dropdown__icon"
  );

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document
    .querySelector(".dropdown .dropdown__title")
    .dispatchEvent(new Event("change"));
  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, "rotate-90", 0));
}

//get elements
const dropdownTitle = document.querySelector(".dropdown .dropdown__title");
const dropdownOptions = document.querySelectorAll(
  ".dropdown .dropdown__option"
);

//bind listeners to these elements
dropdownTitle.addEventListener("click", toggleMenuDisplay);

dropdownOptions.forEach((option) =>
  option.addEventListener("click", handleOptionSelected)
);

// document
//   .querySelector(".dropdown .title")
//   .addEventListener("change", handleTitleChange);

// tab-activetors
function setupTabs() {
  document.querySelectorAll(".tabs__btn").forEach((button) => {
    button.addEventListener("click", () => {
      const bar = button.parentElement.parentElement;
      const tabsContainer = bar.parentElement.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.tabs__content[data-tab="${tabNumber}"]`
      );

      bar.querySelectorAll(".tabs__btn").forEach((button) => {
        button.classList.remove("active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
        tab.classList.remove("active");
      });

      button.classList.add("active");
      tabToActivate.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();

  document.querySelectorAll(".tabs").forEach((tabsContainer) => {
    tabsContainer.querySelector(".tabs__bar .tabs__btn").click();
  });
});

// ajax-like btn
const TAB_URL = `https://graph.facebook.com/v11.0/${PAGE_ID}?fields=albums%7Bphotos%7Bimages%7D%7D&access_token=${ACCESS_TOKEN}`;

function appendImages(data, tab) {
  const dataToTab = document.querySelector(tab);
  let photoContainer = document.createElement("div");
  photoContainer.setAttribute("class", "tabs-content__img");
  photoContainer.classList.add("tabs-content__img--hide");
  let img = document.createElement("img");
  let photoUrl = data.images[0].source;
  img.setAttribute("src", photoUrl);
  photoContainer.appendChild(img);
  dataToTab.insertAdjacentElement("afterbegin", photoContainer);
}

function setBtnActivator(btn, tab, start, step) {
  const loadMore = document.querySelector(btn);
  const currentTab = document.querySelector(tab);
  const items = currentTab.querySelectorAll(`.tabs-content__img--hide`);

  let startItem = start;

  if (startItem + step > items.length) {
    loadMore.style.display = "none";
  }

  for (let i = 0; i < items.length && i < startItem; i++) {
    items[i].classList.remove(`tabs-content__img--hide`);
    items[i].classList.add(`tabs-content__img--show`);
  }

  loadMore.addEventListener("click", function () {
    if (startItem + step >= items.length) {
      loadMore.style.display = "none";
    }
    for (let i = startItem; i < items.length && i < startItem + step; i++) {
      items[i].classList.remove(`tabs-content__img--hide`);
      items[i].classList.add(`tabs-content__img--show`);
    }
    startItem = startItem + step;
  });
}

let ind = 1;
function renderTab(album) {
  const photoArr = album.photos.data;

  if (album.id != "104648155213079") {
    photoArr.forEach((photo) => {
      appendImages(photo, `#tab-img-wrap-${ind}`);
    });
    setBtnActivator(`#load-more-${ind}`, `#tab-img-wrap-${ind}`, 4, 2);
    ind++;
  }
}

async function getDataImages(url) {
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    let albumsArr = json.albums.data;

    albumsArr.forEach((album) => renderTab(album));
  }
}

window.addEventListener("DOMContentLoaded", function () {
  getDataImages(TAB_URL);
});
