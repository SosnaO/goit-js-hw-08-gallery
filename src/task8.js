import images from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');
const openModalBtn = document.querySelector('.js-lightbox');
const lightboxImageEl = openModalBtn.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]')
const lightboxOverlay = openModalBtn.querySelector('.lightbox__overlay');

lightboxOverlay.addEventListener('click', onLightboxOverlay);
gallery.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);

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
function onOpenModal(event) {
  event.preventDefault('');
  openModalBtn.classList.add('is-open');
  lightboxImageEl.src = event.target.dataset.source;
  window.addEventListener('keydown', onEscKeydown);
}
function onCloseModal() {
  openModalBtn.classList.remove('is-open');
  lightboxImageEl.src = '';
  window.removeEventListener('keydown',onEscKeydown)
 }
function onLightboxOverlay() {
  onCloseModal();
}
function onEscKeydown(event) {
  if (event.code === 'Escape'){
    onCloseModal();
  }
 }
