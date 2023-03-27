let input = document.getElementById("inputText");
let btnAdd = document.getElementById("buttonAdd");
let uls = document.querySelector("#ultareas");
let inputFolder = document.getElementById("inputTextFolder");
let btnFolderAdd = document.getElementById("buttonFolderAdd");
let ulsC = document.querySelector('#ulcarpetas');
let selectsOPC = document.getElementById('folders');
let opcSelec = document.querySelector('#opc');

// * Mostramos el input para añadir la carpeta
function mostrar(){
    document.getElementById('addFolder').style.display = 'flex';
}

// * Añadimos una tarea a la lista
btnAdd.addEventListener("click", (e) => {
    e.preventDefault;
    let tarea = input.value;
    let litexto = document.createElement("p");
    litexto.textContent = tarea;
    let carpeta = selectsOPC.value; 
    if(tarea !== ""){
        if(selectsOPC.value === carpeta){
            let lisS = document.createElement("li");
            let liStexto = document.createElement("p");
            liStexto.textContent = tarea + ' - ' + carpeta;
            if(selectsOPC.value === carpeta){
                lisS.appendChild(liStexto);
                lisS.appendChild(botonBorrarCarpetas());
                ulsC.appendChild(lisS);
            }
        }
    }
    input.value = "";
})

// * Borramos las tareas
function botonBorrarLista(){
    // ! Creamos el boton para borrar 
    let btnDelete = document.createElement("button") 
    btnDelete.textContent = "X";
    btnDelete.className = "buttonDelete";
    btnDelete.type = "button";

    // ! Hago un addEventListener para que reaccione al ser pulsado
    btnDelete.addEventListener("click", (e) => {
        let tareaborrar = e.target.parentElement;
        uls.removeChild(tareaborrar);
    })
    return btnDelete;
}

// * Añadimos una carpeta a la lista + el radio
btnFolderAdd.addEventListener("click", (e) => {
    e.preventDefault;
    let carpeta2 = inputFolder.value
    if(carpeta2 !== ""){
       let opc = document.createElement('option');
       opcTexto = document.createTextNode(carpeta2);
       opc.appendChild(opcTexto);
       opc.id = 'opc';
       opc.value = carpeta2;
       selectsOPC.appendChild(opc);
       
       carpeta2.value = "";
    }
    carpeta2.value = "";
})

function botonBorrarCarpetas(){
    // ! Creamos el boton para borrar 
    let btnDeleteSub = document.createElement("button") 
    btnDeleteSub.textContent = "X";
    btnDeleteSub.className = "buttonDelete";
    btnDeleteSub.type = "button";

    // ! Hago un addEventListener para que reaccione al ser pulsado
    btnDeleteSub.addEventListener("click", (e) => {
        let tareaborrar = e.target.parentElement;
        ulsC.removeChild(tareaborrar);
    })
    return btnDeleteSub;
}
