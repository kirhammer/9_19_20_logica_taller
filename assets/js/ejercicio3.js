const button3 = document.getElementById('ejercicio-3');
const strings = document.getElementById('string-container');

button3.addEventListener('click', () => convertirString());

const convertirString = () => {
    const nombre = prompt('Digita una frase: ');
    if(nombre){
        const transformed = nombre.split('').map(char => char !== ' ' ? char :  '--').join('-');
        
        const divider = document.createElement("div");
        divider.setAttribute('class', 'dropdown-divider'); 
        const div = document.createElement("div");
        div.innerText= `${transformed}`; 
        div.setAttribute('class','px-4  text-center');
        strings.appendChild(divider); 
        strings.appendChild(div); 
    }else{
        alert('No digitaste ninguna frase!')
    }
    
}