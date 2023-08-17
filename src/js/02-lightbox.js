import { galleryItems } from './gallery-items.js';
// Change code below this line
const items = document.querySelector(`.gallery`);

console.log(items);
const galleryPicture = getGalleryPicture(galleryItems);

items.insertAdjacentHTML("beforeend", galleryPicture);
  console.log(getGalleryPicture(galleryItems));
function getGalleryPicture(galleryItems) {
  return  galleryItems.map(({priview, original, description})=> {
      return  `<li><div class="gallery__item">
      <a class="gallery__link" href="${original}"  target="_self">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div></li>`;
  }).join(``);  

};
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'top',
  navText: ['<', '>']
});
// items.click(function(event) {
//   let el = event.target;
//   el.hasClass('basicLightbox') ? el.removeClass('basicLightbox') : el.addClass('basicLightbox');
// });