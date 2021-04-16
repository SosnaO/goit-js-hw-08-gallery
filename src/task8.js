import images from './gallery-items.js';
const gallery=document.querySelector('.js-gallery')
const cardsMarkup = createGalleryItemMarkup(images);
gallery.insertAdjacentHTML('beforeend', cardsMarkup);

gallery.addEventListener('click', onGalleryClick);


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

function onGalleryClick(event) {
    const isUrlLargeImage = event.target.classList.contains('gallery__link')
    


console.log(event.target.dataset.source);
}



console.log(createGalleryItemMarkup(images));
