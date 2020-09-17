const button2 = document.getElementById('ejercicio-2');
const body = document.getElementById('phrase-container');

button2.addEventListener('click', () => cargarFrase());

const cargarFrase = () => {
    const nombre = prompt('Digita una frase: ');
    if(nombre){
        const reverse = nombre.split('').reverse().join('');
        const letters = nombre.split('').reduce((acum,char) => {return char !== ' '? acum+1 :  acum} , 0);
        const spaces = nombre.split('').length - letters;
        
        const divider = document.createElement("div");
        divider.setAttribute('class', 'dropdown-divider'); 
        const div = document.createElement("div");
        div.innerText= `Tu palabra al revés es: ${reverse}, tiene ${letters} letras y ${spaces} espacios`; 
        div.setAttribute('class','px-4  text-center');
        body.appendChild(divider); 
        body.appendChild(div); 
    }else{
        alert('No digitaste ninguna frase!')
    }
    
}