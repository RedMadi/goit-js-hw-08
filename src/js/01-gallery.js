import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const createGalleryCard = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      alt='${description}'
    />
  </a>
</li>`;

const itemsListArr = galleryItems.map(item => createGalleryCard(item)).join('');

galleryList.insertAdjacentHTML('afterbegin', itemsListArr);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
