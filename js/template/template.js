let MenuItems = ["Bandeja Paisa Grande"  , "Bandeja Paisa Pequeña", "Bandeja Lentejas","Bandeja Posta","Cazuela Frijoles Grande","Cazuela Frijoles Pequeño","Cazuela Ranchera","Sancocho de Res Grande","Sancocho de Res Pequeño","Ajiaco Grande","Ajiaco Pequeño","Mondongo","Parrillada de la Casa","Chuleta de Cerdo","Costilla BBQ2","Ensalada de la Casa","Ensalada Cesar","Ensalada Especial","Gaseosa","Jugos Naturales","Agua", "Cafe"];


function InitialValues() {
    var select = document.getElementsByClassName("menuItems");

    for (var i = 0; i < select.length; i++) {

        MenuItems.forEach((value) => {
            // New item
            let option = document.createElement("option");
            option.text = value;
            option.value = value;

            select[i].appendChild(option);
        });
    }
}

function AddTemplateItem(label, value) {
    let template = `<li class="list-group-item d-flex justify-content-between align-items-center">${label}<span class="badge bg-primary rounded-pill">${value}</span></li>`

    return template;
}

function AddTableItem(id, producto, cantidad, Ventas) {
    let template = `<tr><th scope="row">${id}</th><td>${producto}</td><td>${cantidad}</td><td>${Ventas}</td></tr>`

    return template;
}

function AddTableItemOption2(id, producto, cantidad, Ventas) {
    let tableRow = document.createElement("tr");
    let tableDataId = document.createElement("th");
    let tableDataproducto = document.createElement("td");
    let tableDatacantidad = document.createElement("td");
    let tableDataVentas = document.createElement("td");

    tableDataId.appendChild(document.createTextNode(id));
    tableDataId.scope = "row";
    
    tableDataproducto.appendChild(document.createTextNode(producto));
    tableDatacantidad.appendChild(document.createTextNode(cantidad));
    tableDataVentas.appendChild(document.createTextNode(Ventas));

    tableRow.appendChild(tableDataId);
    tableRow.appendChild(tableDataproducto);
    tableRow.appendChild(tableDatacantidad);
    tableRow.appendChild(tableDataVentas);

    return tableRow;
    
}


// Initial values and template defaults
InitialValues();
