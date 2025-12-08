const track = document.querySelector(".carousel-track");
const images = Array.from(track.children);

const itemsPerPage = 4;           // antal billeder der vises
const itemWidth = 210;            // 200px + 10px margin-right
let index = 0;

document.querySelector(".next").onclick = () => {
  if (index < images.length - itemsPerPage) {
    index += itemsPerPage;
    updateCarousel();
  }
};

document.querySelector(".prev").onclick = () => {
  if (index > 0) {
    index -= itemsPerPage;
    updateCarousel();
  }
};

function updateCarousel() {
  const moveAmount = index * itemWidth;
  track.style.transform = `translateX(-${moveAmount}px)`;
}