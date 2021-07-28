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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy10YWIxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRyb3Atc2VsZWN0IGFjdGl2YXRvclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzTmFtZSwgXCJcIik7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKSArIFwiIFwiICsgY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXkoZWxlbSkge1xuICBjb25zdCBjdXJEaXNwbGF5U3R5bGUgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cbiAgaWYgKGN1ckRpc3BsYXlTdHlsZSA9PT0gXCJub25lXCIgfHwgY3VyRGlzcGxheVN0eWxlID09PSBcIlwiKSB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnVEaXNwbGF5KGUpIHtcbiAgY29uc3QgZHJvcGRvd24gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgbWVudSA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX21lbnVcIik7XG4gIGNvbnN0IGljb24gPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19pY29uXCIpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVkXCIpO1xuICB0b2dnbGVDbGFzcyhtZW51LCBcIm1lbnUtLWhpZGVcIik7XG4gIHRvZ2dsZUNsYXNzKGljb24sIFwicm90YXRlLTkwXCIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3RlZChlKSB7XG4gIHRvZ2dsZUNsYXNzKGUudGFyZ2V0LnBhcmVudE5vZGUsIFwibWVudS0taGlkZVwiKTtcblxuICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnRleHRDb250ZW50ICsgXCIgXCI7XG4gIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLmRyb3Bkb3duX190aXRsZVwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLmRyb3Bkb3duX190aXRsZSAuZHJvcGRvd25fX2ljb25cIik7XG5cbiAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG4gIHRpdGxlRWxlbS5hcHBlbmRDaGlsZChpY29uKTtcblxuICAvL3RyaWdnZXIgY3VzdG9tIGV2ZW50XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLmRyb3Bkb3duX190aXRsZVwiKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gIC8vc2V0VGltZW91dCBpcyB1c2VkIHNvIHRyYW5zaXRpb24gaXMgcHJvcGVybHkgc2hvd25cbiAgc2V0VGltZW91dCgoKSA9PiB0b2dnbGVDbGFzcyhpY29uLCBcInJvdGF0ZS05MFwiLCAwKSk7XG59XG5cbi8vZ2V0IGVsZW1lbnRzXG5jb25zdCBkcm9wZG93blRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93biAuZHJvcGRvd25fX3RpdGxlXCIpO1xuY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93biAuZHJvcGRvd25fX29wdGlvblwiKTtcblxuLy9iaW5kIGxpc3RlbmVycyB0byB0aGVzZSBlbGVtZW50c1xuZHJvcGRvd25UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudURpc3BsYXkpO1xuXG5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PlxuICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU9wdGlvblNlbGVjdGVkKVxuKTtcblxuLy8gZG9jdW1lbnRcbi8vICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLnRpdGxlXCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVRpdGxlQ2hhbmdlKTtcblxuXG4vLyB0YWItYWN0aXZldG9yc1xuZnVuY3Rpb24gc2V0dXBUYWJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2J0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGJhciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gYmFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHRhYk51bWJlciA9IGJ1dHRvbi5kYXRhc2V0LmZvclRhYjtcbiAgICAgIGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFic19fY29udGVudFtkYXRhLXRhYj1cIiR7dGFiTnVtYmVyfVwiXWBcbiAgICAgICk7XG5cbiAgICAgIGJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2J0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICAgIHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19jb250ZW50XCIpLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgc2V0dXBUYWJzKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzXCIpLmZvckVhY2goKHRhYnNDb250YWluZXIpID0+IHtcbiAgICB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fYmFyIC50YWJzX19idG5cIikuY2xpY2soKTtcbiAgfSk7XG59KTtcblxuLy8gYWpheC1saWtlIGJ0blxuZnVuY3Rpb24gcHJlc3NIaWRlKGJ0biwgaXRlbSwgdGFiLCBzdGFydCwgc3RlcCwgaWQpIHtcblxuICAvLyBhcHBlbmQgZmFjZWJvb2sgaW1nXG4gIGZ1bmN0aW9uIGZhY2Vib29rSW50ZWdyYXRpb24oaWQsIHRhYikge1xuICAgIC8vIEFDQ0VTU19UT0tFTiB5b3UgY2FuIGZpbmQgaW4gc2VydmljZS5odG1sIGF0IHRoZSBib3R0b20gb2YgcGFnZVxuICAgIGNvbnN0IEFMQlVNX0lEID0gaWQ7XG4gICAgY29uc3QgVEFCX1VSTCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92MTEuMC8ke0FMQlVNX0lEfT9maWVsZHM9cGhvdG9zJTdCaW1hZ2VzJTdEJmFjY2Vzc190b2tlbj0ke0FDQ0VTU19UT0tFTn1gO1xuICBcbiAgICAvLyBhcHBlbmQgZmV0Y2hlZCBkYXRhIHRvIGNlcnRhaW4gdGFiXG4gICAgZnVuY3Rpb24gYXBwZW5kSW1hZ2VzKGRhdGEsIHRhYikge1xuICAgICAgY29uc3QgZGF0YVRvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWIpO1xuICAgICAgbGV0IHBob3RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBob3RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFicy1jb250ZW50X19pbWdcIik7XG4gICAgICBwaG90b0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzLWNvbnRlbnRfX2ltZy0taGlkZScpXG4gICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGxldCBwaG90b1VybCA9IGRhdGEuaW1hZ2VzWzBdLnNvdXJjZTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGhvdG9VcmwpO1xuICAgICAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIGRhdGFUb1RhYi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHBob3RvQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCdG5BY3RpdmF0b3IoKSB7XG4gICAgICBjb25zdCBsb2FkTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiKVxuICAgICAgICBjb25zdCBpdGVtcyA9IGN1cnJlbnRUYWIucXVlcnlTZWxlY3RvckFsbChgLiR7aXRlbX0tLWhpZGVgKTtcblxuICAgICAgICBsZXQgc3RhcnRJdGVtID0gc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0SXRlbStzdGVwID4gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgbG9hZE1vcmUuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoICYmIGkgPCBzdGFydEl0ZW07IGkrKykge1xuICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoYCR7aXRlbX0tLWhpZGVgKVxuICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoYCR7aXRlbX0tLXNob3dgKVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0SXRlbStzdGVwID49IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9hZE1vcmUuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SXRlbTsgaSA8IGl0ZW1zLmxlbmd0aCAmJiBpIDwgc3RhcnRJdGVtK3N0ZXA7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShgJHtpdGVtfS0taGlkZWApXG4gICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKGAke2l0ZW19LS1zaG93YClcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnRJdGVtID0gc3RhcnRJdGVtK3N0ZXA7XG4gICAgICAgIH0pXG4gICAgfVxuICBcbiAgICAvLyBnZXQgYW5kIHNldCBmYWNlYm9vayBwaG90byB0byB0YWIgMVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFJbWFnZXModXJsLCB0YWIpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIFxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBsZXQgcGhvdG9zQXJyID0ganNvbi5waG90b3MuZGF0YTtcbiAgICAgICAgXG4gICAgICAgIHBob3Rvc0Fyci5mb3JFYWNoKChwaG90bykgPT4ge1xuICAgICAgICAgIGFwcGVuZEltYWdlcyhwaG90bywgdGFiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0QnRuQWN0aXZhdG9yKClcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGdldERhdGFJbWFnZXMoVEFCX1VSTCwgdGFiKVxuICB9XG4gIGZhY2Vib29rSW50ZWdyYXRpb24oaWQsIHRhYik7XG59XG5cbi8vIGFsYnVtcy1pZCB5b3UgY2FuIGZpbmQgaW4gc2VydmljZS5odG1sIGF0IHRoZSBib3R0b20gb2YgcGFnZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgcHJlc3NIaWRlKCcjbG9hZC1tb3JlLTEnLCAndGFicy1jb250ZW50X19pbWcnLCAnI3RhYi1pbWctd3JhcC0xJywgNCwgMiwgQUxCVU1fSUQxKVxuICBwcmVzc0hpZGUoJyNsb2FkLW1vcmUtMicsICd0YWJzLWNvbnRlbnRfX2ltZycsICcjdGFiLWltZy13cmFwLTInLCA0LCAyLCBBTEJVTV9JRDIpXG4gIHByZXNzSGlkZSgnI2xvYWQtbW9yZS0zJywgJ3RhYnMtY29udGVudF9faW1nJywgJyN0YWItaW1nLXdyYXAtMycsIDQsIDIsIEFMQlVNX0lEMylcbiAgcHJlc3NIaWRlKCcjbG9hZC1tb3JlLTQnLCAndGFicy1jb250ZW50X19pbWcnLCAnI3RhYi1pbWctd3JhcC00JywgNCwgMiwgQUxCVU1fSUQ0KVxuICBwcmVzc0hpZGUoJyNsb2FkLW1vcmUtNScsICd0YWJzLWNvbnRlbnRfX2ltZycsICcjdGFiLWltZy13cmFwLTUnLCA0LCAyLCBBTEJVTV9JRDUpXG4gIHByZXNzSGlkZSgnI2xvYWQtbW9yZS02JywgJ3RhYnMtY29udGVudF9faW1nJywgJyN0YWItaW1nLXdyYXAtNicsIDQsIDIsIEFMQlVNX0lENilcbn0pIl0sImZpbGUiOiJzZXJ2aWNlcy10YWIxLmpzIn0=
