const imagenes = [
  {
    img: "paisajes-1.jpg",
  },
  {
    img: "paisajes-2.jpg",
  },
  {
    img: "paisajes-3.jpg",
  },
  {
    img: "paisajes-4.jpg",
  },
  {
    img: "paisajes-5.jpg",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const imgContainer = document.querySelector("#mini-img-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
  let changed = current;

  current = current + 1 < imagenes.length ? current + 1 : current;

  if (current !== changed) {
    renderCurrentImg(imagenes[current].img);
    darBorde();
  }
});

bPrev.addEventListener("click", (e) => {
  let changed = current;

  current = current - 1 >= 0 ? current - 1 : current;

  if (current !== changed) {
    renderCurrentImg(imagenes[current].img);
    darBorde();
  }
});

renderCurrentImg(imagenes[current].img);
renderImg();
darBorde();

function renderCurrentImg(img) {
  currentContainer.innerHTML = `
        <div class="blob">
          <img src="./img/${img}" alt="">
        </div>
  `;
}

function renderImg() {
  const html = imagenes.map((image, index) => {
    return `<img id="item" class="mini-img${index} ${
      index == 0 ? "border" : ""
    }" data-id=${index} src="./img/${image.img}" alt="">`;
  });

  imgContainer.innerHTML = html.join("");

  document.querySelectorAll("#item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const id = +item.getAttribute("data-id");
      current = id;
      renderCurrentImg(imagenes[current].img);
      darBorde();
    });
  });
}

function darBorde() {
  let minisIMAGE = [];
  document.querySelectorAll("#item").forEach((item) => {
    minisIMAGE.push(item);
  });
  const miniImg0 = minisIMAGE[0];
  const miniImg1 = minisIMAGE[1];
  const miniImg2 = minisIMAGE[2];
  const miniImg3 = minisIMAGE[3];
  const miniImg4 = minisIMAGE[4];

  if (current == 0) {
    miniImg0.classList.add("border");
    miniImg1.classList.remove("border");
    miniImg2.classList.remove("border");
    miniImg3.classList.remove("border");
    miniImg4.classList.remove("border");
  }

  if (current == 1) {
    miniImg0.classList.remove("border");
    miniImg1.classList.add("border");
    miniImg2.classList.remove("border");
    miniImg3.classList.remove("border");
    miniImg4.classList.remove("border");
  }

  if (current == 2) {
    miniImg0.classList.remove("border");
    miniImg1.classList.remove("border");
    miniImg2.classList.add("border");
    miniImg3.classList.remove("border");
    miniImg4.classList.remove("border");
  }

  if (current == 3) {
    miniImg0.classList.remove("border");
    miniImg1.classList.remove("border");
    miniImg2.classList.remove("border");
    miniImg3.classList.add("border");
    miniImg4.classList.remove("border");
  }

  if (current == 4) {
    miniImg0.classList.remove("border");
    miniImg1.classList.remove("border");
    miniImg2.classList.remove("border");
    miniImg3.classList.remove("border");
    miniImg4.classList.add("border");
  }
}
