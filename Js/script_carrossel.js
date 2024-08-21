const slides = document.querySelectorAll(".container-carrossel-reserados .slide-plano-reservado-perfil");
const pagNum = document.querySelectorAll(".pagNum-plano-reservado");
let numPagAnt = 0;
let slideIndex = 1;
let count = 0;
// let idIntervalo = null; // Auto Slide

document.addEventListener("DOMContentLoaded", inicializarSlider);

function inicializarSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("mostrarSlide");
        document.getElementById(slideIndex).classList.add("pagAtiva");
        // idIntervalo = setInterval(slideProx, 5000); // Auto Slide
    }
}

function mostrarSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("mostrarSlide");
    });
    
    pagNum.forEach(pag => {
        pag.classList.remove("pagAtiva");
    });


    slides[slideIndex].classList.add("mostrarSlide");
    document.getElementById(index).classList.add("pagAtiva");
    numPagAnt = index;
    count++;

}

function slideAnt(){
    slideIndex--;
    mostrarSlide(slideIndex);
}

function slideProx(){
    slideIndex++;
    mostrarSlide(slideIndex);
}

function setPage(index){
    slideIndex = index;
    mostrarSlide(slideIndex);
}