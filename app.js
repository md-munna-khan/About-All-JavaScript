window.onload = function(){
main()
}

function main(){
  const btn = document.getElementById('click-me')
const title = document.getElementById('title')
let currentTitle= title.textContent;
let nextTitle =  'change dom element '
btn.addEventListener('click',function(e){
title.innerText = nextTitle;
const temp = currentTitle
currentTitle = nextTitle
nextTitle = temp
});
}