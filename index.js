let input = document.getElementById("inputText");
let btnAdd = document.getElementById("buttonAdd");
let inputFolder = document.getElementById("inputTextFolder");
let btnFolderAdd = document.getElementById("buttonFolderAdd");
let adminTareas = document.getElementById("opc-tareas");
let selectsOPC = document.getElementById("folders");
let opcSelec = document.getElementById("folders").options;
let titulo = document.getElementById("tituloCarpeta");

// * Mostramos el input para añadir la carpeta
function mostrar() {
    document.getElementById("addFolder").style.display = "flex";
}

// * Añadimos una tarea a la lista
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let tarea = input.value;
    let litexto = document.createElement("p");
    litexto.textContent = tarea;
    let carpeta = selectsOPC.value;

    if (tarea === "") return;

    if (selectsOPC.value !== carpeta) return;

    let lisS = document.createElement("li");
    let liStexto = document.createElement("p");
    liStexto.textContent = tarea;

    lisS.appendChild(liStexto);
    lisS.appendChild(botonBorrarListas());
    let ulsC = document.createElement("ul");
    ulsC.appendChild(lisS);
    ulsC.classList.add("listas-" + carpeta);
    ulsC.classList.add("tareas");
    adminTareas.appendChild(ulsC);

    input.value = "";
});

// * Añadimos una carpeta a la lista + el radio
btnFolderAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let carpeta2 = inputFolder.value;

    inputFolder.value = "";

    if (carpeta2 === "") return;

    let opc = document.createElement("option");
    opcTexto = document.createTextNode(carpeta2);
    opc.appendChild(opcTexto);
    opc.id = "lista-" + carpeta2;
    opc.value = carpeta2;
    selectsOPC.appendChild(opc);
    document.getElementById("addFolder").style.display = "none";
});

function botonBorrarListas() {
    // ! Creamos el boton para borrar
    let btnDeleteSub = document.createElement("button");
    btnDeleteSub.textContent = "X";
    btnDeleteSub.className = "buttonDelete";
    btnDeleteSub.type = "button";

    btnDeleteSub.addEventListener("click", (e) => {
        let tareaBorrar = adminTareas.childNodes[0];
        adminTareas.removeChild(tareaBorrar);
    });
    return btnDeleteSub;
}

selectsOPC.addEventListener("change", function () {
    let tituloSelect = opcSelec[selectsOPC.selectedIndex].text;
    titulo.textContent = tituloSelect;
});

selectsOPC.addEventListener("change", function () {
    const className = "listas-" + selectsOPC.value;

    let listas = document.getElementsByTagName("ul");

    for (let i = 0; i < listas.length; i++) {
        const ul = listas.item(i);

        if (ul === null) break;

        if (ul.classList.contains(className)) {
            ul.style.display = "block";
            continue;
        }

        ul.style.display = "none";
    }
    
});
