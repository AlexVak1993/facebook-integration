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
  const icon = document.querySelector(".dropdown .dropdown__title .dropdown__icon");

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector(".dropdown .dropdown__title").dispatchEvent(new Event("change"));
  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, "rotate-90", 0));
}

//get elements
const dropdownTitle = document.querySelector(".dropdown .dropdown__title");
const dropdownOptions = document.querySelectorAll(".dropdown .dropdown__option");

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
function pressHide(btn, item, tab, start, step, id) {

  // append facebook img
  function facebookIntegration(id, tab) {
    // ACCESS_TOKEN you can find in service.html at the bottom of page
    const ALBUM_ID = id;
    const TAB_URL = `https://graph.facebook.com/v11.0/${ALBUM_ID}?fields=photos%7Bimages%7D&access_token=${ACCESS_TOKEN}`;
  
    // append fetched data to certain tab
    function appendImages(data, tab) {
      const dataToTab = document.querySelector(tab);
      let photoContainer = document.createElement("div");
      photoContainer.setAttribute("class", "tabs-content__img");
      photoContainer.classList.add('tabs-content__img--hide')
      let img = document.createElement("img");
      let photoUrl = data.images[0].source;
      img.setAttribute("src", photoUrl);
      photoContainer.appendChild(img);
      dataToTab.insertAdjacentElement("afterbegin", photoContainer);
    }

    function setBtnActivator() {
      const loadMore = document.querySelector(btn);
        const currentTab = document.querySelector(tab)
        const items = currentTab.querySelectorAll(`.${item}--hide`);

        let startItem = start;

        if (startItem+step > items.length) {
          loadMore.style.display='none'
        }

        for (let i = 0; i < items.length && i < startItem; i++) {
          items[i].classList.remove(`${item}--hide`)
          items[i].classList.add(`${item}--show`)
        }

        loadMore.addEventListener('click', function () {
          if (startItem+step >= items.length) {
            loadMore.style.display='none'
          }
          for (let i = startItem; i < items.length && i < startItem+step; i++) {
            items[i].classList.remove(`${item}--hide`)
            items[i].classList.add(`${item}--show`)
          }
          startItem = startItem+step;
        })
    }
  
    // get and set facebook photo to tab 1
    async function getDataImages(url, tab) {
      let response = await fetch(url);
      // console.log(response);
  
      if (response.ok) {
        let json = await response.json();
        let photosArr = json.photos.data;
        
        photosArr.forEach((photo) => {
          appendImages(photo, tab);
        });

        setBtnActivator()
      }
    }
  
    getDataImages(TAB_URL, tab)
  }
  facebookIntegration(id, tab);
}

// albums-id you can find in service.html at the bottom of page
window.addEventListener('DOMContentLoaded', function() {
  pressHide('#load-more-1', 'tabs-content__img', '#tab-img-wrap-1', 4, 2, ALBUM_ID1)
  pressHide('#load-more-2', 'tabs-content__img', '#tab-img-wrap-2', 4, 2, ALBUM_ID2)
  pressHide('#load-more-3', 'tabs-content__img', '#tab-img-wrap-3', 4, 2, ALBUM_ID3)
  pressHide('#load-more-4', 'tabs-content__img', '#tab-img-wrap-4', 4, 2, ALBUM_ID4)
  pressHide('#load-more-5', 'tabs-content__img', '#tab-img-wrap-5', 4, 2, ALBUM_ID5)
  pressHide('#load-more-6', 'tabs-content__img', '#tab-img-wrap-6', 4, 2, ALBUM_ID6)
})