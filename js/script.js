const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const claseParrafito = document.querySelector('.parrafito');
const idParrafito = document.querySelector('#parrafito');
const input = document.querySelector("input");

console.log({
    h1, 
    p,
    claseParrafito,
    idParrafito,
    input,
});



h1.innerText="Modificando Texto del HTML desde JS";
h1?.classList.add("red");
h1?.classList.toggle("green");

 
 
 h1?.classList.add("red");
h1?.classList.toggle("green");

const img = document.createElement("img");
img.setAttribute('src','https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png')

idParrafito?.append(img);