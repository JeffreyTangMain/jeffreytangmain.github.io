function Slides(slideCount, currentSlide, slideID) {
    this.slideCount = slideCount;
    this.currentSlide = currentSlide;
    this.slideID = slideID
    this.setSlide = function (n) {
        let i;
        let slides = document.querySelector(".currentImage" + "." + this.slideID).children;
        let dots = document.querySelector(".imageSelector" + "." + this.slideID).children;
        if (n > slides.length) { this.currentSlide = 1 }
        if (n < 1) { this.currentSlide = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        n -= 1;
        slides[n].style.display = "block";
        dots[n].className += " active";
    }
}

var slideCount = document.querySelector(".currentImage.project1").children.length;
const project1 = new Slides(slideCount, 1, "project1");

project1.setSlide(1);

slideCount = document.querySelector(".currentImage.project2").children.length;
const project2 = new Slides(slideCount, 1, "project2");

project2.setSlide(1);

slideCount = document.querySelector(".currentImage.project3").children.length;
const project3 = new Slides(slideCount, 1, "project3");

project3.setSlide(1);

slideCount = document.querySelector(".currentImage.project4").children.length;
const project4 = new Slides(slideCount, 1, "project4");

project4.setSlide(1);

