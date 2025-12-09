

// Billede karrusel //

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

// Favevalg til højtaleren //

const colors = [
  {
    title: "Moonlight White",
    color: "white",
    hex: "#EBDEC6",
    image: "img/Billeder af højtaler/White Lumina png.png"

  },
{
  title: "Chocolate Brown", 
color: "brown",
hex: "#282119",
image: "/Billeder af højtaler/Brown Lumina png.png",
},
];

const colorPicker = document.querySelector("#color-picker");
const selectedColorTitle = document.querySelector("#selected-color-title");
const speakerImage = document.querySelector("#selected -speaker-image");

// Gennemløb farverne og opret knapper for hver farve//
for (const color of colors) {
  const html = /*html*/ `<button class="color-option" style="background-color: ${color.hex};"></button>`;
  colorPicker,insertAdjacentHTML("beforeend", html); // Tilføj knap til farvevalg//
}

