var lightboxContainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var imgItem = document.getElementsByClassName("item-img");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var wClose = document.getElementById("wClose");



var imgArr = [];
var currentIndex = 0;

for (i = 0; i < imgItem.length; i++) {
    imgArr.push(imgItem[i]);

    imgItem[i].addEventListener("click", function (e) {
        lightboxContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightboxItem.style.backgroundImage = "url(" + imgSrc + ")";

        currentIndex = imgArr.indexOf(e.target);
    })
}

next.addEventListener("click", function () {
    nextImg();
})

function nextImg() {
    currentIndex++;
    if (currentIndex == imgArr.length) {
        currentIndex = 0;
    }

    lightboxItem.style.backgroundImage = "url(" + imgArr[currentIndex].src + ")";
}
prev.addEventListener("click", function () {
    prevImg();
})

function prevImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }

    lightboxItem.style.backgroundImage = "url(" + imgArr[currentIndex].src + ")";
}
wClose.addEventListener("click", function () {
    lightboxContainer.classList.remove("show");


})

lightboxContainer.addEventListener("click", function (e) {
    if (e.target == lightboxContainer) {
        lightboxContainer.classList.remove("show");


    }
})

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 39) {
        nextImg();

    }
})

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) {
        prevImg();

    }
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        lightboxContainer.classList.remove("show");

    }
})
