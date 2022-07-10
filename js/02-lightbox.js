import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 1,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}"
      data-source="${original}"
      alt='${description}' />
</a>`,
    )
    .join('');
}
