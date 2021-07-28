// async function facebookIntegration() {
//   const ACCESS_TOKEN = "949150869264755|oFPg8DlLKhk8d4MbSr0r-iLHoIc";
//   const ALBUM_ID = "446433485530653";
//   const TAB1_URL = `https://graph.facebook.com/v11.0/${ALBUM_ID}?fields=photos%7Bimages%7D&access_token=${ACCESS_TOKEN}`;

//   const tab1 = document.querySelector("#tab-content-1");

//   function appendImages(data) {
//     let photoContainer = document.createElement("div");
//     photoContainer.setAttribute("class", "tabs-content__img");
//     photoContainer.classList.add('tabs-content__img--hide')
//     let img = document.createElement("img");
//     let photoUrl = data.images[0].source;
//     img.setAttribute("src", photoUrl);
//     photoContainer.appendChild(img);
//     tab1.insertAdjacentElement("afterbegin", photoContainer);
//   }

//   async function getDataImages(url) {
//     let response = await fetch(url);

//     if (response.ok) {
//       let json = await response.json();
//       let photosArr = json.photos.data;
      
//       photosArr.forEach((photo) => {
//         appendImages(photo);
//       });
//     }
//   }

//   getDataImages(TAB1_URL)

// }
// facebookIntegration();
