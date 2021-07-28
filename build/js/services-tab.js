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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy10YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZHJvcC1zZWxlY3QgYWN0aXZhdG9yXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpIHtcbiAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NOYW1lLCBcIlwiKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoL1xccysvZywgXCIgXCIpICsgXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheShlbGVtKSB7XG4gIGNvbnN0IGN1ckRpc3BsYXlTdHlsZSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblxuICBpZiAoY3VyRGlzcGxheVN0eWxlID09PSBcIm5vbmVcIiB8fCBjdXJEaXNwbGF5U3R5bGUgPT09IFwiXCIpIHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudURpc3BsYXkoZSkge1xuICBjb25zdCBkcm9wZG93biA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCBtZW51ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fbWVudVwiKTtcbiAgY29uc3QgaWNvbiA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2ljb25cIik7XG5cbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZWRcIik7XG4gIHRvZ2dsZUNsYXNzKG1lbnUsIFwibWVudS0taGlkZVwiKTtcbiAgdG9nZ2xlQ2xhc3MoaWNvbiwgXCJyb3RhdGUtOTBcIik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU9wdGlvblNlbGVjdGVkKGUpIHtcbiAgdG9nZ2xlQ2xhc3MoZS50YXJnZXQucGFyZW50Tm9kZSwgXCJtZW51LS1oaWRlXCIpO1xuXG4gIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudGV4dENvbnRlbnQgKyBcIiBcIjtcbiAgY29uc3QgdGl0bGVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93biAuZHJvcGRvd25fX3RpdGxlXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5kcm9wZG93biAuZHJvcGRvd25fX3RpdGxlIC5kcm9wZG93bl9faWNvblwiXG4gICk7XG5cbiAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG4gIHRpdGxlRWxlbS5hcHBlbmRDaGlsZChpY29uKTtcblxuICAvL3RyaWdnZXIgY3VzdG9tIGV2ZW50XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLmRyb3Bkb3duX190aXRsZVwiKVxuICAgIC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gIC8vc2V0VGltZW91dCBpcyB1c2VkIHNvIHRyYW5zaXRpb24gaXMgcHJvcGVybHkgc2hvd25cbiAgc2V0VGltZW91dCgoKSA9PiB0b2dnbGVDbGFzcyhpY29uLCBcInJvdGF0ZS05MFwiLCAwKSk7XG59XG5cbi8vZ2V0IGVsZW1lbnRzXG5jb25zdCBkcm9wZG93blRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93biAuZHJvcGRvd25fX3RpdGxlXCIpO1xuY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgXCIuZHJvcGRvd24gLmRyb3Bkb3duX19vcHRpb25cIlxuKTtcblxuLy9iaW5kIGxpc3RlbmVycyB0byB0aGVzZSBlbGVtZW50c1xuZHJvcGRvd25UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudURpc3BsYXkpO1xuXG5kcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PlxuICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU9wdGlvblNlbGVjdGVkKVxuKTtcblxuLy8gZG9jdW1lbnRcbi8vICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24gLnRpdGxlXCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVRpdGxlQ2hhbmdlKTtcblxuLy8gdGFiLWFjdGl2ZXRvcnNcbmZ1bmN0aW9uIHNldHVwVGFicygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBiYXIgPSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGJhci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YWJOdW1iZXIgPSBidXR0b24uZGF0YXNldC5mb3JUYWI7XG4gICAgICBjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRhYnNfX2NvbnRlbnRbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXG4gICAgICApO1xuXG4gICAgICBiYXIucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19fY29udGVudFwiKS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcblxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB0YWJUb0FjdGl2YXRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHNldHVwVGFicygpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic1wiKS5mb3JFYWNoKCh0YWJzQ29udGFpbmVyKSA9PiB7XG4gICAgdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2JhciAudGFic19fYnRuXCIpLmNsaWNrKCk7XG4gIH0pO1xufSk7XG5cbi8vIGFqYXgtbGlrZSBidG5cbmNvbnN0IFRBQl9VUkwgPSBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjExLjAvJHtQQUdFX0lEfT9maWVsZHM9YWxidW1zJTdCcGhvdG9zJTdCaW1hZ2VzJTdEJTdEJmFjY2Vzc190b2tlbj0ke0FDQ0VTU19UT0tFTn1gO1xuXG5mdW5jdGlvbiBhcHBlbmRJbWFnZXMoZGF0YSwgdGFiKSB7XG4gIGNvbnN0IGRhdGFUb1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiKTtcbiAgbGV0IHBob3RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvdG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJzLWNvbnRlbnRfX2ltZ1wiKTtcbiAgcGhvdG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhYnMtY29udGVudF9faW1nLS1oaWRlXCIpO1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbGV0IHBob3RvVXJsID0gZGF0YS5pbWFnZXNbMF0uc291cmNlO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHBob3RvVXJsKTtcbiAgcGhvdG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGF0YVRvVGFiLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgcGhvdG9Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRCdG5BY3RpdmF0b3IoYnRuLCB0YWIsIHN0YXJ0LCBzdGVwKSB7XG4gIGNvbnN0IGxvYWRNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG4pO1xuICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWIpO1xuICBjb25zdCBpdGVtcyA9IGN1cnJlbnRUYWIucXVlcnlTZWxlY3RvckFsbChgLnRhYnMtY29udGVudF9faW1nLS1oaWRlYCk7XG5cbiAgbGV0IHN0YXJ0SXRlbSA9IHN0YXJ0O1xuXG4gIGlmIChzdGFydEl0ZW0gKyBzdGVwID4gaXRlbXMubGVuZ3RoKSB7XG4gICAgbG9hZE1vcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGggJiYgaSA8IHN0YXJ0SXRlbTsgaSsrKSB7XG4gICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShgdGFicy1jb250ZW50X19pbWctLWhpZGVgKTtcbiAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKGB0YWJzLWNvbnRlbnRfX2ltZy0tc2hvd2ApO1xuICB9XG5cbiAgbG9hZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhcnRJdGVtICsgc3RlcCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGxvYWRNb3JlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SXRlbTsgaSA8IGl0ZW1zLmxlbmd0aCAmJiBpIDwgc3RhcnRJdGVtICsgc3RlcDsgaSsrKSB7XG4gICAgICBpdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGB0YWJzLWNvbnRlbnRfX2ltZy0taGlkZWApO1xuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LmFkZChgdGFicy1jb250ZW50X19pbWctLXNob3dgKTtcbiAgICB9XG4gICAgc3RhcnRJdGVtID0gc3RhcnRJdGVtICsgc3RlcDtcbiAgfSk7XG59XG5cbmxldCBpbmQgPSAxO1xuZnVuY3Rpb24gcmVuZGVyVGFiKGFsYnVtKSB7XG4gIGNvbnN0IHBob3RvQXJyID0gYWxidW0ucGhvdG9zLmRhdGE7XG5cbiAgaWYgKGFsYnVtLmlkICE9IFwiMTA0NjQ4MTU1MjEzMDc5XCIpIHtcbiAgICBwaG90b0Fyci5mb3JFYWNoKChwaG90bykgPT4ge1xuICAgICAgYXBwZW5kSW1hZ2VzKHBob3RvLCBgI3RhYi1pbWctd3JhcC0ke2luZH1gKTtcbiAgICB9KTtcbiAgICBzZXRCdG5BY3RpdmF0b3IoYCNsb2FkLW1vcmUtJHtpbmR9YCwgYCN0YWItaW1nLXdyYXAtJHtpbmR9YCwgNCwgMik7XG4gICAgaW5kKys7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUltYWdlcyh1cmwpIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsZXQgYWxidW1zQXJyID0ganNvbi5hbGJ1bXMuZGF0YTtcblxuICAgIGFsYnVtc0Fyci5mb3JFYWNoKChhbGJ1bSkgPT4gcmVuZGVyVGFiKGFsYnVtKSk7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgZ2V0RGF0YUltYWdlcyhUQUJfVVJMKTtcbn0pO1xuIl0sImZpbGUiOiJzZXJ2aWNlcy10YWIuanMifQ==
