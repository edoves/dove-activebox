// images
const imagesSlider = document.querySelector(".images__slider");
const imagesArr = Array.from(imagesSlider.children);
const imageSliderWidth = imagesArr[0].clientWidth;

//text
const textSlider = document.querySelector(".text__slider");
const textArr = Array.from(textSlider.children);
const textSliderWidth = textArr[0].clientWidth;

// dot avigation
const sliderNav = document.querySelector(".sliderNav");
const sliderNavArr = Array.from(sliderNav.children);

let sliderIndex = 0;

sliderNavArr.forEach((slideDot, idx) => {
  slideDot.addEventListener("click", () => {
    sliderIndex = idx;
    // slider for image
    imagesSlider.style.transform = `translateX(-${
      sliderIndex * imageSliderWidth
    }px)`;
    // slider for text
    textSlider.style.transform = `translateX(-${
      sliderIndex * textSliderWidth
    }px)`;

    currentSlide(slideDot);
  });
});

function currentSlide(slideDot) {
  sliderNavArr.forEach((dot) => {
    dot.classList.remove("active");
  });
  slideDot.classList.add("active");
}
