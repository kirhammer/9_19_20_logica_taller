const names = document.getElementById('name-list');

const button1 = document.getElementById('ejercicio-1');

button1.addEventListener('click', () => cargarNombres());

let nameList= [];

const cargarNombres = () => {
    while(true){
        const nombre = prompt('Digita un nombre: ');
        if(nombre){
            if(nombre !== ' '){
                nameList.push(nombre);
                nameList.sort();
            }else{
                break;
            }
        }else{
            alert('Debes digitar un nombre!');
        }

    }

    nameList.forEach(name =>{
        const divider = document.createElement("div");
        divider.setAttribute('class', 'dropdown-divider'); 
        const div = document.createElement("div");
        div.innerText= `${name}`; 
        div.setAttribute('class','px-4  text-center');
        names.appendChild(divider); 
        names.appendChild(div); 
    })
}