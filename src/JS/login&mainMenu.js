const users = JSON.parse(window.localStorage.getItem("all_users"));
function login(){
    let user;
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            user = users[i];
            break;
        }
    }

    if (user) {
        window.localStorage.removeItem("user");
        window.localStorage.setItem("user", JSON.stringify(user));
        window.location.href = '../HTML/mainMenu.html';
    } else {
        alert('NO ACCESO');
    }
}

function user(){
    const user = JSON.parse(window.localStorage.getItem("user"));
    return user;
}
function interfaceConfig() {
    $('#sideMenu').hidden;
    $('#name').text(user().username);

    blankBillsUI();
};

function navigation(){
    $('#sideMenu').toggle(500);

    if(user().position!=="rrhh"){
        document.getElementById("admin").style.display = "none";
    } else{
        document.getElementById("admin").style.display = "block";
    }
}

function blankBillsUI(){
    $('#label').text("Banco de Facturas en blanco");
    document.getElementById("blankBills").style.display = "block";
    document.getElementById("uploadBill").style.display = "none";
    document.getElementById("checkedBills").style.display = "none";
    document.getElementById("checkingBills").style.display = "none";
    document.getElementById("workers").style.display = "none";
    document.getElementById("states").style.display = "none";

    switch (user().position){
        case "ejecutivo_glosa":
            document.getElementById("check").style.display = "block";
            break;
        default:
            document.getElementById("check").style.display = "none";
    }

    let col = ["ID de factura", "Trabajador", "Ejecutivo a cargo", "Cliente", "Operación", "Fecha de ingreso"];

    const table = document.createElement("table");
    table.border = 2;
    table.cellPadding = 5;

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");

        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < 5; i++) {
        //if (allUsers[i].role === "colaborador") {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            /*switch (j) {
                case 0:
                    tabCell.innerHTML = allUsers[i].id;
                    break;
                case 1:
                    tabCell.innerHTML = allUsers[i].username;
                    break;
                case 2:
                    tabCell.innerHTML = allUsers[i].area;
                    break;
                case 3:
                    tabCell.innerHTML = allUsers[i].role;
                    break;
                case 4:
                    let button = document.createElement("button");
                    button.innerHTML = "+";
                    let auxButton = button.cloneNode(true);
                    tabCell.appendChild(auxButton);
                    break;
            }*/
        }
        // }
    }

    const divShowData = document.getElementById('table');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

function uploadBillsUI(){
    $('#label').text("Subir factura");
    document.getElementById("blankBills").style.display = "none";
    document.getElementById("uploadBill").style.display = "block";
    document.getElementById("checkedBills").style.display = "none";
    document.getElementById("checkingBills").style.display = "none";
    document.getElementById("workers").style.display = "none";
    document.getElementById("states").style.display = "none";
}

function checkedBillsUI(){
    $('#label').text("Facturas revisadas");
    document.getElementById("blankBills").style.display = "none";
    document.getElementById("uploadBill").style.display = "none";
    document.getElementById("checkedBills").style.display = "block";
    document.getElementById("checkingBills").style.display = "none";
    document.getElementById("workers").style.display = "none";
    document.getElementById("states").style.display = "none";


    let col = ["ID de factura", "Trabajador", "Ejecutivo a cargo", "Cliente", "Operación", "Fecha de ingreso",
        "Número de revisiones", "Fecha de última revisión"];

    const table = document.createElement("table");
    table.border = 2;
    table.cellPadding = 5;

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");

        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < 5; i++) {
        //if (allUsers[i].role === "colaborador") {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            /*switch (j) {
                case 0:
                    tabCell.innerHTML = allUsers[i].id;
                    break;
                case 1:
                    tabCell.innerHTML = allUsers[i].username;
                    break;
                case 2:
                    tabCell.innerHTML = allUsers[i].area;
                    break;
                case 3:
                    tabCell.innerHTML = allUsers[i].role;
                    break;
                case 4:
                    let button = document.createElement("button");
                    button.innerHTML = "+";
                    let auxButton = button.cloneNode(true);
                    tabCell.appendChild(auxButton);
                    break;
            }*/
        }
        // }
    }

    const divShowData = document.getElementById('table1');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

function checkBillUI(){
    $('#label').text("Revisión de factura");
    document.getElementById("blankBills").style.display = "none";
    document.getElementById("uploadBill").style.display = "none";
    document.getElementById("checkedBills").style.display = "none";
    document.getElementById("checkingBills").style.display = "block";
    document.getElementById("workers").style.display = "none";
    document.getElementById("states").style.display = "none";

}

function workersUI(){
    document.getElementById("addNew").style.display = "none";
    $('#label').text("Banco de trabajadores");
    document.getElementById("blankBills").style.display = "none";
    document.getElementById("uploadBill").style.display = "none";
    document.getElementById("checkedBills").style.display = "none";
    document.getElementById("checkingBills").style.display = "none";
    document.getElementById("workers").style.display = "block";
    document.getElementById("states").style.display = "none";

    let col = ["ID de trabajador", "Nombre", "Puesto", "Área", "Status"];

    const table = document.createElement("table");
    table.border = 2;
    table.cellPadding = 5;

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");

        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < 5; i++) {
        //if (allUsers[i].role === "colaborador") {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            /*switch (j) {
                case 0:
                    tabCell.innerHTML = allUsers[i].id;
                    break;
                case 1:
                    tabCell.innerHTML = allUsers[i].username;
                    break;
                case 2:
                    tabCell.innerHTML = allUsers[i].area;
                    break;
                case 3:
                    tabCell.innerHTML = allUsers[i].role;
                    break;
                case 4:
                    let button = document.createElement("button");
                    button.innerHTML = "+";
                    let auxButton = button.cloneNode(true);
                    tabCell.appendChild(auxButton);
                    break;
            }*/
        }
        // }
    }

    const divShowData = document.getElementById('tableW');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

function addW(){
    $('#addNew').toggle();
}

function statesUI(){
    document.getElementById("addNewS").style.display = "none";
    $('#label').text("Banco de países");
    document.getElementById("blankBills").style.display = "none";
    document.getElementById("uploadBill").style.display = "none";
    document.getElementById("checkedBills").style.display = "none";
    document.getElementById("checkingBills").style.display = "none";
    document.getElementById("workers").style.display = "none";
    document.getElementById("states").style.display = "block";

    let col = ["Paises"];

    const table = document.createElement("table");
    table.border = 2;
    table.cellPadding = 5;

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");

        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < 5; i++) {
        //if (allUsers[i].role === "colaborador") {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            /*switch (j) {
                case 0:
                    tabCell.innerHTML = allUsers[i].id;
                    break;
                case 1:
                    tabCell.innerHTML = allUsers[i].username;
                    break;
                case 2:
                    tabCell.innerHTML = allUsers[i].area;
                    break;
                case 3:
                    tabCell.innerHTML = allUsers[i].role;
                    break;
                case 4:
                    let button = document.createElement("button");
                    button.innerHTML = "+";
                    let auxButton = button.cloneNode(true);
                    tabCell.appendChild(auxButton);
                    break;
            }*/
        }
        // }
    }

    const divShowData = document.getElementById('tableS');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

function addS(){
    $('#addNewS').toggle();
}
