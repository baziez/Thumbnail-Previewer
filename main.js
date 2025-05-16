const imageUpload = document.getElementById('imageUpload');
const previewButton = document.getElementById('previewButton');
const tvPreview = document.querySelector('#tvPreview .thumbnail-preview');
const desktopPreview = document.querySelector('#desktopPreview .thumbnail-preview');
const tabletPreview = document.querySelector('#tabletPreview .thumbnail-preview');
const mobilePreview = document.querySelector('#mobilePreview .thumbnail-preview');
const smallMobilePreview = document.querySelector('#smallMobilePreview .thumbnail-preview');

previewButton.addEventListener('click', () => {
  const file = imageUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      updateThumbnail(tvPreview, imageUrl);
      updateThumbnail(desktopPreview, imageUrl);
      updateThumbnail(tabletPreview, imageUrl);
      updateThumbnail(mobilePreview, imageUrl);
      updateThumbnail(smallMobilePreview, imageUrl);
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file first.');
  }
});

function updateThumbnail(previewElement, imageUrl) {
  previewElement.style.backgroundImage = `url(${imageUrl})`;
  previewElement.style.backgroundSize = 'cover';
  previewElement.style.backgroundPosition = 'center';
}
