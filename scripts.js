const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const images_carousel = document.querySelectorAll(".style_images");
const video_sound = document.querySelector(".video_sound")
const sound_button = document.querySelector(".sound_button")
const informations = document.querySelector(".informations")
const modal_informations = document.querySelector(".modal")
const closeModal = document.querySelector(".exit_modal")




let index = 0;

const changeSlide = () => {
  let activeImage = document.querySelector(".style_images.active");
  activeImage.classList.remove("active");
  images_carousel[index].classList.add("active");
};

nextButton.addEventListener("click", () => {
  if (index < images_carousel.length) {
    index = (index + 1) % images_carousel.length;
    changeSlide();
    
  } else {
    index = 0;
    changeSlide();
  }
});
prevButton.addEventListener("click", () => {
  if (index > 0) {
    index = (index - 1) % images_carousel.length;
    changeSlide();
    
  } else {
    index = images_carousel.length;
  }
});

// Active Sound Trailer

const activeSound = ()=>{
  video_sound.muted = !video_sound.muted;
  sound_button.innerHTML = video_sound.muted 
      ? '<i class="bi bi-volume-mute-fill"></i>' 
      : '<i class="bi bi-volume-up"></i>';
}
sound_button.addEventListener("click",activeSound)

// Active modal informations 
const changeModal = ()=>{
  modal_informations.style.display="block" 
}
informations.addEventListener("click",changeModal)

//Exit modal
const exitModal = ()=>{
  modal_informations.style.display="none" 
}
closeModal.addEventListener("click",exitModal)

// Áudio tudum NETFLIX
const audioInit=()=>{
  const playAudio = document.querySelector(".playAudio")
  playAudio.play()
}
window.addEventListener("load",audioInit)
