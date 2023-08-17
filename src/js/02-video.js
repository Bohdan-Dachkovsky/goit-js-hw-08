const video = document.querySelectorAll(`.player`);
console.log(video);
let galleryItems = 1;
const galleryPicture = getVideo(galleryItems);

video.insertAdjacentHTML('afterbegin');

function getVideo(galleryItems) {
  return galleryItems
    .map(() => {
      return `<li><div class="gallery__item">
      <iframe
      id="vimeo-player
      src="https://player.vimeo.com/video/236203659"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>
      </div></li>`;
    })
    .join(``);
}
