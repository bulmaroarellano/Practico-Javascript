const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const pResult = document.querySelector("#result");
const btn=document.querySelector("#btnCalcular");
const form = document.querySelector("form");


function sumarInputValues(event){
    event.preventDefault(); 
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: "+parseInt(sumaInputs);
}

form.addEventListener('submit', sumarInputValues);

