const imagenes = [
  {
    img: "paisajes-1.jpg",
    title: "Gatito en el Templo",
    desc: "Un día este gatito se hizo budista."
  },
  {
    img: "paisajes-2.jpg",
    title: "Arte en la terraza",
    desc: "No hay mejor inspiración que la vida misma vista desde la ventana."
  },
  {
    img: "paisajes-3.jpg",
    title: "Festividad Nocturna",
    desc: "Se dice que los espiritus bondadosos nos cuidan por las noches."
  },
  {
    img: "paisajes-4.jpg",
    title: "Puente a la luna",
    desc: "La luna es el reflejo del mismo sol, asi que es nuestro propio reflejo también."
  },
  {
    img: "paisajes-5.jpg",
    title: "Río del cerezo",
    desc: "Si querés que las buenas vibras se te impregnen, planta un cerezo cerca."
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const imgContainer = document.querySelector("#mini-img-container");
const infoContainer = document.querySelector('#info-container')
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
  let changed = current;

  current = current + 1 < imagenes.length ? current + 1 : current;

  if (current !== changed) {
    renderCurrentImg(imagenes[current].img);
    renderCurrentTitle(imagenes[current].title , imagenes[current].desc)
    darBorde();
  }
});

bPrev.addEventListener("click", (e) => {
  let changed = current;

  current = current - 1 >= 0 ? current - 1 : current;

  if (current !== changed) {
    renderCurrentImg(imagenes[current].img);
    renderCurrentTitle(imagenes[current].title , imagenes[current].desc)
    darBorde();
  }
});

renderCurrentImg(imagenes[current].img);
renderCurrentTitle(imagenes[current].title , imagenes[current].desc)
renderImg();
darBorde();

function renderCurrentImg(img) {
  currentContainer.innerHTML = `
        <div class="blob">
          <img src="./img/${img}" alt="">
        </div>
  `;
}

function renderCurrentTitle(title, desc) {
  infoContainer.innerHTML = `
    <h2 class="title">${title}</h2>
    <p class="desc">${desc}</p>
  `;
}

function renderImg() {
  const html = imagenes.map((image, index) => {
    return `<img id="item" class="mini-img ${index == 0 ? "border" : ""}" data-id=${index} src="./img/${image.img}" alt="">`;
  });

  imgContainer.innerHTML = html.join("");

  document.querySelectorAll("#item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const id = +item.getAttribute("data-id");
      current = id;
      renderCurrentImg(imagenes[current].img);
      renderCurrentTitle(imagenes[current].title , imagenes[current].desc)
      darBorde();
    });
  });
}

function darBorde() {
  let minisIMAGE = [];
  document.querySelectorAll("#item").forEach((item) => {
    minisIMAGE.push(item);
  });

  if (current == 0) {
    minisIMAGE[0].classList.add("border");
    minisIMAGE[1].classList.remove("border");
    minisIMAGE[2].classList.remove("border");
    minisIMAGE[3].classList.remove("border");
    minisIMAGE[4].classList.remove("border");
  } else if (current == 1) {
    minisIMAGE[0].classList.remove("border");
    minisIMAGE[1].classList.add("border");
    minisIMAGE[2].classList.remove("border");
    minisIMAGE[3].classList.remove("border");
    minisIMAGE[4].classList.remove("border");
  } else if (current == 2) {
    minisIMAGE[0].classList.remove("border");
    minisIMAGE[1].classList.remove("border");
    minisIMAGE[2].classList.add("border");
    minisIMAGE[3].classList.remove("border");
    minisIMAGE[4].classList.remove("border");
  } else if (current == 3) {
    minisIMAGE[0].classList.remove("border");
    minisIMAGE[1].classList.remove("border");
    minisIMAGE[2].classList.remove("border");
    minisIMAGE[3].classList.add("border");
    minisIMAGE[4].classList.remove("border");
  } else if (current == 4) {
    minisIMAGE[0].classList.remove("border");
    minisIMAGE[1].classList.remove("border");
    minisIMAGE[2].classList.remove("border");
    minisIMAGE[3].classList.remove("border");
    minisIMAGE[4].classList.add("border");
  }
}
