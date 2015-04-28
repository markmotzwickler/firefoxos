function brr() {
    window.navigator.vibrate(200);
}
document.addEventListener(function(event) {
   var buttons=document.querySelectorAll("button");
   for(x=0;x<buttons.length;x++){
       buttons[x].addEventListener("click", brr);
   }
});