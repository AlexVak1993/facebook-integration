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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmYWNlYm9vay1pbnRlZ3JhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3luYyBmdW5jdGlvbiBmYWNlYm9va0ludGVncmF0aW9uKCkge1xuLy8gICBjb25zdCBBQ0NFU1NfVE9LRU4gPSBcIjk0OTE1MDg2OTI2NDc1NXxvRlBnOERsTEtoazhkNE1iU3Iwci1pTEhvSWNcIjtcbi8vICAgY29uc3QgQUxCVU1fSUQgPSBcIjQ0NjQzMzQ4NTUzMDY1M1wiO1xuLy8gICBjb25zdCBUQUIxX1VSTCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92MTEuMC8ke0FMQlVNX0lEfT9maWVsZHM9cGhvdG9zJTdCaW1hZ2VzJTdEJmFjY2Vzc190b2tlbj0ke0FDQ0VTU19UT0tFTn1gO1xuXG4vLyAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1jb250ZW50LTFcIik7XG5cbi8vICAgZnVuY3Rpb24gYXBwZW5kSW1hZ2VzKGRhdGEpIHtcbi8vICAgICBsZXQgcGhvdG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHBob3RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFicy1jb250ZW50X19pbWdcIik7XG4vLyAgICAgcGhvdG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFicy1jb250ZW50X19pbWctLWhpZGUnKVxuLy8gICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gICAgIGxldCBwaG90b1VybCA9IGRhdGEuaW1hZ2VzWzBdLnNvdXJjZTtcbi8vICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHBob3RvVXJsKTtcbi8vICAgICBwaG90b0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuLy8gICAgIHRhYjEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBwaG90b0NvbnRhaW5lcik7XG4vLyAgIH1cblxuLy8gICBhc3luYyBmdW5jdGlvbiBnZXREYXRhSW1hZ2VzKHVybCkge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbi8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbi8vICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgbGV0IHBob3Rvc0FyciA9IGpzb24ucGhvdG9zLmRhdGE7XG4gICAgICBcbi8vICAgICAgIHBob3Rvc0Fyci5mb3JFYWNoKChwaG90bykgPT4ge1xuLy8gICAgICAgICBhcHBlbmRJbWFnZXMocGhvdG8pO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgZ2V0RGF0YUltYWdlcyhUQUIxX1VSTClcblxuLy8gfVxuLy8gZmFjZWJvb2tJbnRlZ3JhdGlvbigpO1xuIl0sImZpbGUiOiJmYWNlYm9vay1pbnRlZ3JhdGlvbi5qcyJ9
