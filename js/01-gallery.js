import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.addEventListener('click', onGalleryImgClick);

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt='${description}'
    />
  </a>
</div>`,
    )
    .join('');
}

function onGalleryImgClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${evt.target.dataset.source}">
`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscButtonPress);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscButtonPress);
      },
    },
  );
  instance.show();
  function onEscButtonPress(evt) {
    if (evt.key === 'Escape') {
      instance.close();
    }
  }
}

// import { galleryItems } from './gallery-items.js';

// const refs = {
//   gallery: document.querySelector('.gallery'),
// };

// refs.gallery.addEventListener('click', onGalleryImgClick);

// refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

// const instance = basicLightbox.create(
//   `<img class="modal-img" width="1400" height="900" src="">
// `,
//   {
//     onShow: () => {
//       document.addEventListener('keydown', onEscButtonPress);
//     },
//     onClose: () => {
//       document.removeEventListener('keydown', onEscButtonPress);
//     },
//   },
// );

// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(
//       ({ preview, original, description }) => `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt='${description}'
//     />
//   </a>
// </li>`,
//     )
//     .join('');
// }

// function onGalleryImgClick(evt) {
//   evt.preventDefault();

//   instance.show(() => {
//     const elem = document.querySelector('.modal-img');
//     elem.src = evt.target.dataset.source;
//   });
// }

// function onEscButtonPress(evt) {
//   if (evt.key === 'Escape') {
//     instance.close();
//   }
// }
