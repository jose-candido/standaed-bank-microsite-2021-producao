const slider=function(){const e=document.querySelectorAll(".slide"),t=document.querySelector(".slider__btn--left"),r=document.querySelector(".slider__btn--right"),o=document.querySelector(".dots"),c=document.querySelector(".arr-left"),l=document.querySelector(".arr-right"),a=document.querySelector(".arr-right");let s=0;const i=e.length,n=function(e){document.querySelectorAll(".dots__dot").forEach(e=>e.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")},d=function(t){0===t?c.style.display="none":(c.style.display="flex",a.classList.remove("shake-arrow")),l.style.display=5===t?"none":"flex",0!==t&&1!==t&&3!==t&&5!==t||(document.getElementById("arr-left").src="img/esquerda.svg",document.getElementById("arr-right").src="img/direito.svg",document.getElementById("anterior").src="img/anterior.svg",document.getElementById("proximo").src="img/proximo.svg"),2===t&&(document.getElementById("arr-left").src="img/esquerda-blue.svg",document.getElementById("arr-right").src="img/direita-blue.svg",document.getElementById("anterior").src="img/anterior-blue.svg",document.getElementById("proximo").src="img/proximo-blue.svg"),4===t&&(document.getElementById("arr-left").src="img/esquerda-blue.svg",document.getElementById("arr-right").src="img/direito.svg",document.getElementById("anterior").src="img/anterior.svg",document.getElementById("proximo").src="img/proximo.svg"),e.forEach((e,r)=>{var o=r-t;return 0===o?e.classList.add("slideBeingShown"):e.classList.remove("slideBeingShown"),e.style.transform=`translateX(${100*o}%)`})},u=function(){document.querySelectorAll(".section--4").forEach(e=>{e.querySelectorAll(".bar-entry").forEach(e=>{e.classList.remove("bar-animated")})}),[1,2,3,4,5,6].forEach(e=>{document.querySelectorAll(`.section--4-${e}`).forEach(e=>{e.querySelectorAll(".bar-entry").forEach(e=>{e.classList.remove("bar-animated")})})}),document.querySelectorAll(".section--4").forEach(e=>{e.querySelectorAll(".colaboradores__text").forEach(e=>{e.classList.remove("block-fade-right")}),e.querySelectorAll(".container__left--4-4").forEach(e=>{e.classList.remove("block-fade-right")}),e.querySelectorAll(".container__left--4-4-mobile").forEach(e=>{e.classList.remove("block-fade-right")})}),[1,2,3,4,5,6].forEach(e=>{document.querySelectorAll(`.section--4-${e}`).forEach(e=>{e.querySelectorAll(".colaboradores__text").forEach(e=>{e.classList.remove("block-fade-right")}),e.querySelectorAll(".container__left--4-4").forEach(e=>{e.classList.remove("block-fade-right")}),e.querySelectorAll(".container__left--4-4-mobile").forEach(e=>{e.classList.remove("block-fade-right")})})}),document.querySelectorAll(".section--4").forEach(e=>{e.querySelectorAll(".pie-graph").forEach(e=>{e.classList.remove("block-grow")})}),[1,2,3,4,5,6].forEach(e=>{document.querySelectorAll(`.section--4-${e}`).forEach(e=>{e.querySelectorAll(".pie-graph").forEach(e=>{e.classList.remove("block-grow")})})}),s&&document.querySelectorAll(`.section--4-${s}`).forEach(e=>{e.querySelectorAll(".bar-entry").forEach(e=>{e.classList.add("bar-animated")}),e.querySelectorAll(".colaboradores__text").forEach(e=>{e.classList.add("block-fade-right")}),e.querySelectorAll(".container__left--4-4").forEach(e=>{e.classList.add("block-fade-right")}),e.querySelectorAll(".container__left--4-4-mobile").forEach(e=>{e.classList.add("block-fade-right")}),e.querySelectorAll(".block-animated").forEach(e=>{e.classList.add("block-fade-right")}),e.querySelectorAll(".pie-graph").forEach(e=>{e.classList.add("block-grow")})})},m=function(){s===i-1?s=0:s++,d(s),n(s),u()},f=function(){0===s?s=i-1:s--,d(s),n(s),u()};d(0),e.forEach(function(e,t){o.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${t}"></button>`)}),n(0),r.addEventListener("click",m),t.addEventListener("click",f),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key&&f(),"ArrowRight"===e.key&&m()}),o.addEventListener("click",function(e){if(e.target.classList.contains("dots__dot")){const{slide:t}=e.target.dataset;d(t),n(t)}})};