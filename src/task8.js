import images from './gallery-items.js';
//const gallery=document.querySelector()


function createGalleryItemMarkup(images) {
  const markup = images.map(image => {
   return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
    
  `;
  });
  console.log(images);
};

console.log(createGalleryItemMarkup(images));

