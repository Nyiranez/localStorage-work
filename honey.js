let changestyle= document.querySelector(".select-style");
let par= document.querySelector("p");

changestyle.addEventListener("change", function(){
    par.style.fontFamily= changestyle.value;

    localStorage.setItem("font" , par.style.fontFamily);
});

function showFont(){
  par.style.fontFamily= localStorage.getItem("font");
}
showFont();





let selectimage= document.querySelector(".select-image");
let pics= document.querySelector(".pics");

selectimage.addEventListener("change", function(){
  pics.src= selectimage.value;

  localStorage.setItem('imag', pics.src);
});

function showImage(){
  pics.src= localStorage.getItem("imag");
}
showImage();





let colo= document.querySelector(".input");
let body= document.querySelector("body");
colo.addEventListener("change", function(){


  body.style.backgroundColor= colo.value;
  localStorage.setItem("color", body.style.backgroundColor );
  
});

function showColor(){
  body.style.backgroundColor= localStorage.getItem("color");
}
showColor();