// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryEl = {
  galleryRef: document.querySelector('.gallery'),
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
  </a>
</li>`
    )
    .join('');
}

galleryEl.galleryRef.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
