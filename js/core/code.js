let orders = {
    mesa1: [],
    mesa2: [],
    mesa3: [],
    mesa4: []
};

let totalVentasDia = 0;

function AddItem(item) {
    orders.mesa1.push(item);
    updateOrderTable('mesa1', 'salesItems', 'totalAmount');
    updateTotalSalesTable();
    mostrarCantidadTotalPorPlato('mesa1', 'cantidadTotalPorPlato1');

    function mostrarCantidadTotalPorPlato(mesa, cantidadTotalPorPlatoId) {
        const cantidadTotalPorPlatoElement = document.getElementById(cantidadTotalPorPlatoId);
        cantidadTotalPorPlatoElement.innerHTML = '';

        const uniqueItems = new Set(orders[mesa]);

        for (const item of uniqueItems) {
            const count = orders[mesa].filter(i => i === item).length;
            cantidadTotalPorPlatoElement.innerHTML += `<div>${item}: ${count}</div>`;
        }
    }
}

function AddItem2(item) {
    orders.mesa2.push(item);
    updateOrderTable('mesa2', 'salesItems2', 'totalAmount2');
    updateTotalSalesTable();
    mostrarCantidadTotalPorPlato('mesa2', 'cantidadTotalPorPlato2');

    function mostrarCantidadTotalPorPlato(mesa, cantidadTotalPorPlatoId) {
        const cantidadTotalPorPlatoElement = document.getElementById(cantidadTotalPorPlatoId);
        cantidadTotalPorPlatoElement.innerHTML = '';

        const uniqueItems = new Set(orders[mesa]);

        for (const item of uniqueItems) {
            const count = orders[mesa].filter(i => i === item).length;
            cantidadTotalPorPlatoElement.innerHTML += `<div>${item}: ${count}</div>`;
        }
    }
}

function AddItem3(item) {
    orders.mesa3.push(item);
    updateOrderTable('mesa3', 'salesItems3', 'totalAmount3');
    updateTotalSalesTable();
    mostrarCantidadTotalPorPlato('mesa3', 'cantidadTotalPorPlato3');

    function mostrarCantidadTotalPorPlato(mesa, cantidadTotalPorPlatoId) {
        const cantidadTotalPorPlatoElement = document.getElementById(cantidadTotalPorPlatoId);
        cantidadTotalPorPlatoElement.innerHTML = '';

        const uniqueItems = new Set(orders[mesa]);

        for (const item of uniqueItems) {
            const count = orders[mesa].filter(i => i === item).length;
            cantidadTotalPorPlatoElement.innerHTML += `<div>${item}: ${count}</div>`;
        }
    }
}
function AddItem4(item) {
    orders.mesa4.push(item);
    updateOrderTable('mesa4', 'salesItems4', 'totalAmount4');
    updateTotalSalesTable();
    mostrarCantidadTotalPorPlato('mesa4', 'cantidadTotalPorPlato4');

    function mostrarCantidadTotalPorPlato(mesa, cantidadTotalPorPlatoId) {
        const cantidadTotalPorPlatoElement = document.getElementById(cantidadTotalPorPlatoId);
        cantidadTotalPorPlatoElement.innerHTML = '';

        const uniqueItems = new Set(orders[mesa]);

        for (const item of uniqueItems) {
            const count = orders[mesa].filter(i => i === item).length;
            cantidadTotalPorPlatoElement.innerHTML += `<div>${item}: ${count}</div>`;
        }
    }
}

function updateOrderTable(mesa, tableId, totalAmountId) {
    const tableBody = document.getElementById(tableId);
    const totalAmount = document.getElementById(totalAmountId);

    tableBody.innerHTML = '';

    let total = 0;
    orders[mesa].forEach(item => {
        total += getItemPrice(item);
        tableBody.innerHTML = ``;
    });

    totalAmount.textContent = `$${total.toFixed(3)}`;
}

function updateTotalSalesTable() {
    const totalSalesTable = document.getElementById('totalSalesTable');
    const totalVentasDiaElement = document.getElementById('totalVentasDia');

    totalSalesTable.innerHTML = '';

    const totalVentasDia = Object.values(orders).flat().reduce((acc, item) => acc + getItemPrice(item), 0);

    totalVentasDiaElement.textContent = `$${totalVentasDia.toFixed(3)}`;

    const itemsSold = {};
    Object.values(orders).flat().forEach(item => {
        itemsSold[item] = (itemsSold[item] || 0) + 1;
    });

    for (const [item, cantidad] of Object.entries(itemsSold)) {
        totalSalesTable.innerHTML += `<tr><td>${item}</td><td>${cantidad}</td></tr>`;
    }
}
function getItemPrice(item) {
    const productPrices = {        
            "Bandeja Paisa Grande": 25.000,
            "Bandeja Paisa Pequeña": 15.000,
            "Bandeja Lentejas": 19.750,
            "Bandeja Posta": 35.000,
            "Cazuela Frijoles Grande": 20.000,
            "Cazuela Frijoles Pequeño": 12.000,
            "Cazuela Ranchera": 21.000,
            "Sancocho de Res Grande": 25.000,
            "Sancocho de Res Pequeño": 17.000,
            "Ajiaco Grande": 22.000,
            "Ajiaco Pequeño": 17.250,
            "Mondongo": 21.500,
            "Parrillada de la Casa": 35.000,
            "Chuleta de Cerdo": 25.000,
            "Costilla BBQ2": 37.000,
            "Ensalada de la Casa": 15.000,
            "Ensalada Cesar": 18.000,
            "Ensalada Especial": 18.000,
            "Gaseosa": 4.000,
            "Jugos Naturales": 7.250,
            "Agua": 3.500,
            "Cafe": 2.500,
        // ... (tu lista de productos con precios)
    };
    return productPrices[item] || 0.00;
}