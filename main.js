
  window.onscroll=function(){
  if(window.scrollY >=500){
    let _img=document.querySelector('._img');
    _img.style.cssText ="transform: translateX(0);transition: 1s;";

}
}