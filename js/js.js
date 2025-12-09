

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
    image: "Højtaler som gave moonliight white.png",

  },
{
  title: "Chocolate Brown", 
color: "brown",
hex: "#282119",
image: "Højtaler som gave chocolate brown.png",

},
{
    title: "Dusty Rose",
    color: "pink",
    hex: "#DDA1A2",
    image: "Højtaler som gave dusty rose.png",

  },{
    title: "Lavender Mist",
    color: "purple",
    hex: "#C3BFD5",
    image: "Højtaler som gave lavender mist.png",

  },{
    title: "Sage Green",
    color: "grøn",
    hex: "#B2AC88",
    image: "Højtaler som gave sage green.png",

  },
];

createColorPicker({
  pickerId: "#color-picker",
  titleId: "#selected-color-title",
  imageId: "#selected-speaker-image",
});

// Den nye farvevælger:
createColorPicker({
  pickerId: "#color-picker-2",
  titleId: "#selected-color-title-2",
  imageId: "#selected-speaker-image-2",
});



// Gennemløb farverne og opret knapper for hver farve//
for (const color of colors) {
    const html = `<button class="color-option" style="background-color: ${color.hex};"></button>`;
    colorPicker.insertAdjacentHTML("beforeend", html);

    const colorOption = colorPicker.lastElementChild;

    colorOption.onclick = () => {
        selectedColorTitle.textContent = color.title;
        speakerImage.src = color.image;
    };
  }
  


  function createColorPicker(options) {
  const { pickerId, titleId, imageId } = options;

  const colorPicker = document.querySelector(pickerId);
  const selectedColorTitle = document.querySelector(titleId);
  const speakerImage = document.querySelector(imageId);

  for (const color of colors) {
    const html = `
      <button class="color-option" style="background-color: ${color.hex};"></button>
    `;
    colorPicker.insertAdjacentHTML("beforeend", html);

    const colorButton = colorPicker.lastElementChild;

    colorButton.onclick = () => {
      selectedColorTitle.textContent = color.title;
      speakerImage.src = color.image;
    };
  }
}
