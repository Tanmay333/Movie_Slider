let swiper = new Swiper(".slide-content", {
  loop: true,
  centreSlides: "true",
  fade: true,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: "true",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

class Rating extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rating = this.getAttribute("rating");

    this.innerHTML = `
    <p><i class="fa-solid fa-star"></i>
    <span class="rating">${rating}</span><p>
    <i class="fa-regular fa-star"></i>`;
  }
}

class Buttons extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("btn");

    this.innerHTML = `<button>Watch</button>
    <button><i class="fa-solid fa-play"></i>Trailer</button>`;
  }
}

customElements.define("rating-card", Rating);
customElements.define("watch-options", Buttons);
