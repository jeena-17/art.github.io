const sliders = document.querySelectorAll(".slider");

function slideRight(){
    sliders.forEach(slider=>{
        slider.scrollLeft += 320;
    });
}

function slideLeft(){
    sliders.forEach(slider=>{
        slider.scrollLeft -= 320;
    });
}