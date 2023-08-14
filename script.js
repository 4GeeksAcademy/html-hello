
const images = [
    "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/05/5.jpg",
    "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/05/8.jpg",
    "https://1x.com/images/user/3b2b1d156ccce414f43d61abae052e80-sd.jpg"
  ]; // Add the URLs of your images here
  
  let currentIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  
  function showImage(index) {
    sliderImage.src = images[index];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  showImage(currentIndex);
  