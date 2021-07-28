body = document.querySelector("body");
html = document.querySelector("html");
header = document.querySelector("header");
btnMenu = document.querySelector(".nav__burger");

window.onload = function () {
  pagescroll();
};

// мобильное меню
nav = document.querySelector(".nav");
btnMenu.addEventListener("click", togglenav);
document.querySelector(".nav__menu").onclick = closenav;
function closenav() {
  header.classList.remove("nav-open");
  btnMenu.style.marginRight = "0";
  showscroll();
}
function togglenav() {
  header.classList.toggle("nav-open");
  if (header.classList.contains("nav-open")) {
    btnMenu.style.marginRight = window.innerWidth - html.offsetWidth + "px";
    hidescroll();
  } else {
    showscroll();
    btnMenu.style.marginRight = "0";
  }
}
// мобильное меню

// отключить прокрутку
function hidescroll() {
  body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
  body.style.overflow = "hidden";
}

function showscroll() {
  body.style.paddingRight = 0;
  body.style.overflow = "visible";
}

let scrolid = 0;
function togglescroll() {
  if (scrolid == 0) {
    body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
    body.style.overflow = "hidden";
    scrolid = 1;
  } else {
    body.style.paddingRight = 0;
    body.style.overflow = "visible";
    scrolid = 0;
  }
}

// отключить прокрутку

// Появление меню при прокрутке
function pagescroll() {
  header.classList.add("fixed-header"); 
  let pscroll = 0;
  window.addEventListener("scroll", function () {
    if ((pscroll < pageYOffset) & (pageYOffset > header.offsetHeight)) {
      header.style.transform = "translateY(-100%)"; 
    } else {
      header.style.transform = "none"; 
    }
    pscroll = pageYOffset;
  });
}

//отправка формы
// let form = document.querySelectorAll('.order-form');

// const modal = document.getElementById("modal");

// function ajaxform(evt) {
//   gtag('event', 'submit', {
//     'event_category': 'Form'
//   });
//   evt.preventDefault();
//   let formstatus = this.querySelector('.formstatus');
//   formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

//   let formData = {
//     desc: this.querySelector('input[name="description"]').value,
//     name: this.querySelector('input[name="name"]').value,

//     phone: this.querySelector('input[name="phone"]').value

//   };
//   console.log(formData);
//   let request = new XMLHttpRequest();

//   request.addEventListener('load', function () {

//     formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

//   });

//   request.open('POST', '/mail.php', true);
//   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//   request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));

// };

// for (i = 0; i < form.length; i++) {
//   form[i].addEventListener('submit', ajaxform);
// }
//отправка формы

// accordion

// function accordionInit (parent) {
//   window.addEventListener("load", function () {
//     const accordion = document.querySelector(parent);
//     if(accordion){
//       const items = accordion.querySelectorAll(".accordion__item");
//       const titles = accordion.querySelectorAll(".accordion__item .accordion__title");
//       console.log('2');
//       for (let i = 0; i < items.length; i++) {

//         titles[i].addEventListener('click', function(){

//           if(this.classList.contains('is-active__js')){
//             return '';
//           }
//               for (let i = 0; i < titles.length; i++) {
//                 titles[i].classList.remove('is-active__js');
//               }

//                  this.classList.add('is-active__js');
//         });
//       }
//     }
//   });
// }
//   accordionInit('.accordion-health')

// accordion

//dropdown

// function dropdown() {
//   const drop = document.querySelector(".dropdown__activator");
//   drop.addEventListener("click", function () {
//     drop.classList.toggle("dropdown_open");
//   });
// }

// try {
//   dropdown();
// } catch (e) {
//   console.log(e);
// }
//dropdown

// toggle min-img
// function fullQuality(item) {
//   const priority = item.dataset.priority || 0;
//   setTimeout(function () {
//     const webp = item.querySelector(".webp-img");
//     const noWebp = item.querySelector(".nowebp-img");
//     const fullWebp = webp.dataset.img;
//     const fullNoWebp = noWebp.dataset.img;
//     webp.srcset = fullWebp;
//     noWebp.src = fullNoWebp;
//   }, 1 + 300 * priority);
// }
// function toggleMinImg() {
//   const pictures = document.querySelectorAll(".toggle-img--js");
//   for (let i = 0; i < pictures.length; i++) {
//     const pic = pictures[i];
//     fullQuality(pic);
//   }
// }
// toggleMinImg();
// toggle min-img

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5idG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2J1cmdlclwiKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgcGFnZXNjcm9sbCgpO1xufTtcblxuLy8g0LzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXG5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZW5hdik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fbWVudVwiKS5vbmNsaWNrID0gY2xvc2VuYXY7XG5mdW5jdGlvbiBjbG9zZW5hdigpIHtcbiAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICBzaG93c2Nyb2xsKCk7XG59XG5mdW5jdGlvbiB0b2dnbGVuYXYoKSB7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XG4gIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIikpIHtcbiAgICBidG5NZW51LnN0eWxlLm1hcmdpblJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBodG1sLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgIGhpZGVzY3JvbGwoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93c2Nyb2xsKCk7XG4gICAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICB9XG59XG4vLyDQvNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cblxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xuZnVuY3Rpb24gaGlkZXNjcm9sbCgpIHtcbiAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xufVxuXG5mdW5jdGlvbiBzaG93c2Nyb2xsKCkge1xuICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IDA7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbn1cblxubGV0IHNjcm9saWQgPSAwO1xuZnVuY3Rpb24gdG9nZ2xlc2Nyb2xsKCkge1xuICBpZiAoc2Nyb2xpZCA9PSAwKSB7XG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgc2Nyb2xpZCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAwO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICBzY3JvbGlkID0gMDtcbiAgfVxufVxuXG4vLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDXG5cbi8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQvNC10L3RjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1XG5mdW5jdGlvbiBwYWdlc2Nyb2xsKCkge1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImZpeGVkLWhlYWRlclwiKTsgXG4gIGxldCBwc2Nyb2xsID0gMDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgocHNjcm9sbCA8IHBhZ2VZT2Zmc2V0KSAmIChwYWdlWU9mZnNldCA+IGhlYWRlci5vZmZzZXRIZWlnaHQpKSB7XG4gICAgICBoZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiOyBcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwibm9uZVwiOyBcbiAgICB9XG4gICAgcHNjcm9sbCA9IHBhZ2VZT2Zmc2V0O1xuICB9KTtcbn1cblxuLy/QvtGC0L/RgNCw0LLQutCwINGE0L7RgNC80Ytcbi8vIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLWZvcm0nKTtcblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuXG4vLyBmdW5jdGlvbiBhamF4Zm9ybShldnQpIHtcbi8vICAgZ3RhZygnZXZlbnQnLCAnc3VibWl0Jywge1xuLy8gICAgICdldmVudF9jYXRlZ29yeSc6ICdGb3JtJ1xuLy8gICB9KTtcbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGxldCBmb3Jtc3RhdHVzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZm9ybXN0YXR1cycpO1xuLy8gICBmb3Jtc3RhdHVzLmlubmVySFRNTCA9ICc8Y2xhc3M9XCJsb2FkLWZvcm1cIj7QodC+0LXQtNC40LXQvdC10LjQtSAuLi4nO1xuXG4vLyAgIGxldCBmb3JtRGF0YSA9IHtcbi8vICAgICBkZXNjOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlLFxuLy8gICAgIG5hbWU6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcblxuLy8gICAgIHBob25lOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwaG9uZVwiXScpLnZhbHVlXG5cbi8vICAgfTtcbi8vICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuLy8gICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4vLyAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblxuLy8gICAgIGZvcm1zdGF0dXMuaW5uZXJIVE1MID0gJ9CS0LDRiNCwINC30LDRj9Cy0LrQsCDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QsCwg0L7QttC40LTQsNC50YLQtSDQt9Cy0L7QvdC60LAnO1xuXG4vLyAgIH0pO1xuXG4vLyAgIHJlcXVlc3Qub3BlbignUE9TVCcsICcvbWFpbC5waHAnLCB0cnVlKTtcbi8vICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XG4vLyAgIHJlcXVlc3Quc2VuZCgnbmFtZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhLm5hbWUpICsgJyZwaG9uZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhLnBob25lKSArICcmZGVzYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhLmRlc2MpKTtcblxuLy8gfTtcblxuLy8gZm9yIChpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcbi8vICAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhamF4Zm9ybSk7XG4vLyB9XG4vL9C+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xuXG4vLyBhY2NvcmRpb25cblxuLy8gZnVuY3Rpb24gYWNjb3JkaW9uSW5pdCAocGFyZW50KSB7XG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuLy8gICAgIGlmKGFjY29yZGlvbil7XG4vLyAgICAgICBjb25zdCBpdGVtcyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbl9faXRlbVwiKTtcbi8vICAgICAgIGNvbnN0IHRpdGxlcyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbl9faXRlbSAuYWNjb3JkaW9uX190aXRsZVwiKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCcyJyk7XG4vLyAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbi8vICAgICAgICAgdGl0bGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuLy8gICAgICAgICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmVfX2pzJykpe1xuLy8gICAgICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICB0aXRsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlX19qcycpO1xuLy8gICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmVfX2pzJyk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vLyAgIGFjY29yZGlvbkluaXQoJy5hY2NvcmRpb24taGVhbHRoJylcblxuLy8gYWNjb3JkaW9uXG5cbi8vZHJvcGRvd25cblxuLy8gZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4vLyAgIGNvbnN0IGRyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19hY3RpdmF0b3JcIik7XG4vLyAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBkcm9wLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bl9vcGVuXCIpO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gdHJ5IHtcbi8vICAgZHJvcGRvd24oKTtcbi8vIH0gY2F0Y2ggKGUpIHtcbi8vICAgY29uc29sZS5sb2coZSk7XG4vLyB9XG4vL2Ryb3Bkb3duXG5cbi8vIHRvZ2dsZSBtaW4taW1nXG4vLyBmdW5jdGlvbiBmdWxsUXVhbGl0eShpdGVtKSB7XG4vLyAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5kYXRhc2V0LnByaW9yaXR5IHx8IDA7XG4vLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IHdlYnAgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIud2VicC1pbWdcIik7XG4vLyAgICAgY29uc3Qgbm9XZWJwID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLm5vd2VicC1pbWdcIik7XG4vLyAgICAgY29uc3QgZnVsbFdlYnAgPSB3ZWJwLmRhdGFzZXQuaW1nO1xuLy8gICAgIGNvbnN0IGZ1bGxOb1dlYnAgPSBub1dlYnAuZGF0YXNldC5pbWc7XG4vLyAgICAgd2VicC5zcmNzZXQgPSBmdWxsV2VicDtcbi8vICAgICBub1dlYnAuc3JjID0gZnVsbE5vV2VicDtcbi8vICAgfSwgMSArIDMwMCAqIHByaW9yaXR5KTtcbi8vIH1cbi8vIGZ1bmN0aW9uIHRvZ2dsZU1pbkltZygpIHtcbi8vICAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZ2dsZS1pbWctLWpzXCIpO1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHBpY3R1cmVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgY29uc3QgcGljID0gcGljdHVyZXNbaV07XG4vLyAgICAgZnVsbFF1YWxpdHkocGljKTtcbi8vICAgfVxuLy8gfVxuLy8gdG9nZ2xlTWluSW1nKCk7XG4vLyB0b2dnbGUgbWluLWltZ1xuIl0sImZpbGUiOiJtYWluLmpzIn0=
