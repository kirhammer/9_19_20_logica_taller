const table = document.getElementById('tabla-multiplicar');


calculateTable = (number) =>{
    for (let index = 1; index <= 10; index++) {
        const divider = document.createElement("div");
        divider.setAttribute('class', 'dropdown-divider'); 
        const div = document.createElement("div");
        div.innerText= `${number} x ${index} = ${number*index}`; 
        div.setAttribute('class','px-4  text-center');
        table.appendChild(divider); 
        table.appendChild(div); 
    }
}

calculateTable(11);