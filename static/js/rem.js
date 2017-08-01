
oFs();
function oFs(){
  document.documentElement.style.fontSize=document.documentElement.clientWidth/320*20+"px"
}
window.onresize=window.onload=function () {
  oFs();
};
