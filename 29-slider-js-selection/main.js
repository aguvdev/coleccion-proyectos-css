const imagenes = [
  {
    img: "paisajes-1.jpg"
  },
  {
    img: "paisajes-2.jpg"
  },
  {
    img: "paisajes-3.jpg"
  },
  {
    img: "paisajes-4.jpg"
  },
  {
    img: "paisajes-5.jpg"
  },
];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const imgContainer = document.querySelector('#mini-img-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let current = 0;

bNext.addEventListener('click', e => {
  let changed = current;

  current = current + 1 < imagenes.length ? current + 1 : current;

  if(current !== changed){
    renderCurrentImg(imagenes[current].img); 
  }
});

bPrev.addEventListener('click', e => {
  let changed = current;

  current = current - 1 >= 0 ? current -1: current;

  if(current !== changed){
    renderCurrentImg(imagenes[current].img);
  }
});

renderCurrentImg(imagenes[current].img);
renderImg();

function renderCurrentImg(img) {
  currentContainer.innerHTML = `
        <div class="blob">
          <img src="./img/${img}" alt="">
        </div>
  `;
};

function renderImg() {
  const html = imagenes.map((image, index) => {
    return `<img id="item" data-id=${index} src="./img/${image.img}" alt="">`;
  });

  imgContainer.innerHTML = html.join('');

  document.querySelectorAll('#item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const id = +item.getAttribute('data-id');
      current = id;
      renderCurrentImg(imagenes[current].img);
    });
  })
}