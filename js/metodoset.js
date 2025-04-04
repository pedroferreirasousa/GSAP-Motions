const container = document.querySelector(".container-div");
const title = document.querySelector(".title");


TweenMax.set(container,{
    x: -50,
    y: 50,
    skewX: "-30deg",
});

TweenMax.set(title,{

    skewX: "-30deg",
});

