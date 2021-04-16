import images from './gallery-items.js';
const gallery=document.querySelector('.js-gallery')
const cardsMarkup = createGalleryItemMarkup(images);
gallery.insertAdjacentHTML('beforeend', cardsMarkup);
function createGalleryItemMarkup(images) {
    return images.map(({ preview, original, description }) => {
   return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
      `;
  }).join('');
 
}

console.log(createGalleryItemMarkup(images));
