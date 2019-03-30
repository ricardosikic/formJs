//accedo a los DOM elementos
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let profesion = document.getElementById('profesion');
let sobre = document.getElementById('sobre');
let agregar = document.getElementById('agregar');
let alert = document.getElementById('alert');

//evento


agregar.addEventListener('click', escribe);

let i = 0; //se declara afuera para que no incremente el primer caracter de forma indefinida dentro

function escribe() {
    

    let n = nombre.value;
    let a = apellido.value;
    let p = profesion.value;
    let s = sobre.value;
    
    let name = document.getElementById('name');
    let last = document.getElementById('last');
    let prof = document.getElementById('prof');
    let about = document.getElementById('about');
    

    //validaciones
    if(n.length < 4) { 
        alert.style.display = 'block'; 
    }
  
    let speed = 100;
    if(i < n.length || i < a.length || i < p.length || i < s.length) {
    name.innerHTML += n.charAt(i);
    last.innerHTML += a.charAt(i);
    prof.innerHTML += p.charAt(i);
    about.innerHTML += s.charAt(i);
     i++;
     setTimeout(escribe, speed);
   }
}