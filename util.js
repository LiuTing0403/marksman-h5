function getInitStyle() {
  var width = window.document.documentElement.clientWidth > 640 ? 640 : window.document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width / 7.5 + "px";
};
getInitStyle();
window.addEventListener('resize', getInitStyle);
