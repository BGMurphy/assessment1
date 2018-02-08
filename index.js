var background1 = "";
var background2 = "";
var background3 = "";
var currentBackground = "";
var zoomHeight = 70;
var zoomWidth = 100;
var i = 0;


document.getElementById("bg1").addEventListener("click", function(){
    i = 1;
    background1 = "url(imgs/i1.jpg)";
    background2 = "url(imgs/i2.jpg)";
    background3 = "url(imgs/i3.jpg)";
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})

document.getElementById("bg2").addEventListener("click", function(){
    i = 2;
    background1 = "url(imgs/i4.jpg)";
    background2 = "url(imgs/i5.jpg)";
    background3 = "url(imgs/i6.jpg)";
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})

document.getElementById("bg3").addEventListener("click", function(){
    i = 3;
    background1 = "url(imgs/i7.jpg)";
    background2 = "url(imgs/i8.jpg)";
    background3 = "url(imgs/i9.jpg)";
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})

document.getElementById("bg4").addEventListener("click", function(){
    background1 = "url(imgs/i10.jpg)";
    background2 = "url(imgs/i11.jpg)";
    background3 = "url(imgs/i12.jpg)";
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})

document.getElementById("ch1").addEventListener("mouseenter", function(){
    currentBackground = background1;
    zoom.style.backgroundImage = background1;
})

document.getElementById("ch2").addEventListener("mouseenter", function(){
    currentBackground = background2;
    zoom.style.backgroundImage = background2;
})

document.getElementById("ch3").addEventListener("mouseenter", function(){
    currentBackground = background3;
    zoom.style.backgroundImage = background3;
})

document.getElementById("makebg").addEventListener("click", function(){
    bg.style.backgroundImage = currentBackground;
})

document.getElementById("reset").addEventListener("click", function(){
    bg.style.backgroundImage = "none";
})

document.getElementById("hide").addEventListener("click", function(){
    app1.style.display = "none";
})

document.getElementById("show").addEventListener("click", function(){
    app1.style.display = "block";
})

document.getElementById("zoom").addEventListener("click", function(){
    zoomControls.style.display = "block";
})

document.getElementById("zoomIn").addEventListener("click", function(){
    zoomHeight += 7;
    zoomWidth += 10;
    zoom.style.maxHeight = zoomHeight + "%";
    zoom.style.height = zoomHeight + "%";
    zoom.style.maxWidth = zoomWidth + "%";
    zoom.style.width = zoomWidth + "%";
})

document.getElementById("zoomOut").addEventListener("click", function(){
    zoomHeight -= 7;
    zoomWidth -= 10;
    zoom.style.maxHeight = zoomHeight + "%";
    zoom.style.height = zoomHeight + "%";
    zoom.style.maxWidth = zoomWidth + "%";
    zoom.style.width = zoomWidth + "%";
})

document.getElementById("next").addEventListener("click", function(){
    if (i == 0){
        i += 1;
        background1 = "url(imgs/i1.jpg)";
        background2 = "url(imgs/i2.jpg)";
        background3 = "url(imgs/i3.jpg)";
    } else if (i == 1){
        i += 1;
        background1 = "url(imgs/i4.jpg)";
        background2 = "url(imgs/i5.jpg)";
        background3 = "url(imgs/i6.jpg)";
    } else if (i == 2){
        i += 1;
        background1 = "url(imgs/i7.jpg)";
        background2 = "url(imgs/i8.jpg)";
        background3 = "url(imgs/i9.jpg)";
    }else if (i == 3){
        i += 1;
        background1 = "url(imgs/i10.jpg)";
        background2 = "url(imgs/i11.jpg)";
        background3 = "url(imgs/i12.jpg)";
    } else{
        i = 1;
        background1 = "url(imgs/i1.jpg)";
        background2 = "url(imgs/i2.jpg)";
        background3 = "url(imgs/i3.jpg)";
    }
    
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})
    
    document.getElementById("previous").addEventListener("click", function(){
        
    if (i == 4){
        i -= 1;
        background1 = "url(imgs/i7.jpg)";
        background2 = "url(imgs/i8.jpg)";
        background3 = "url(imgs/i9.jpg)";
    } else if (i == 3){
        i -= 1;
        background1 = "url(imgs/i4.jpg)";
        background2 = "url(imgs/i5.jpg)";
        background3 = "url(imgs/i6.jpg)";
    } else if (i == 2){
        i -= 1;
        background1 = "url(imgs/i1.jpg)";
        background2 = "url(imgs/i2.jpg)";
        background3 = "url(imgs/i3.jpg)";
    } else if (i == 1){
        i = 4;
        background1 = "url(imgs/i10.jpg)";
        background2 = "url(imgs/i11.jpg)";
        background3 = "url(imgs/i12.jpg)";
    } else{
        i = 3;
        background1 = "url(imgs/i10.jpg)";
        background2 = "url(imgs/i11.jpg)";
        background3 = "url(imgs/i12.jpg)";
    }
    
    ch1.style.backgroundImage = background1;
    ch2.style.backgroundImage = background2;
    ch3.style.backgroundImage = background3;
})
