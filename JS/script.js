console.log("El script está funcionando correctamente");


const procesadores = {
    Intel: ["Intel Core i7-13700K", "Intel Core i5-13600K"],
    AMD: ["Procesador AMD Ryzen 5 4600G", "Procesador AMD Ryzen 7 5700X"]
};


function mostrarProcesadores(tipo) {
    const datosDiv = document.getElementById('datos');
    const procesadoresSeleccionados = procesadores[tipo].join("\n\n");
    datosDiv.innerHTML = `<h3>Estos son los 2 procesadores ${tipo} más usados:</h3><pre>${procesadoresSeleccionados}</pre>`;


    const botonVerComputadora = document.getElementById('verComputadora');
    botonVerComputadora.addEventListener('click', function () {
        if (tipo === 'AMD') {
            alert("En base al Ryzen 7 5700X usaría: \n\n-Placa Madre: ASUS ROG Strix X570-E Gaming \n\n-Memoria RAM: 16 GB o 32 GB de RAM DDR4 (velocidad mínima de 3200 MHz o 3600 MHz) \n\n-Tarjeta Gráfica: NVIDIA GeForce RTX 3070 o AMD Radeon RX 6700 XT \n\n-Almacenamiento: 1 TB NVMe M.2 SSD para el sistema operativo y programas. \n\n-Fuente de Poder: 750W - 850W de una marca confiable, con certificación 80 Plus Gold. \n\nYa con esto tendrías una PC lo suficientemente buena para correr todos tus juegos en una calidad de 1080p a 60 fotogramas por segundo como lo mínimo.");
        } else {
            alert("Tomando como base al procesador más potente (Intel Core i7-13700k) armaremos una computadora con estos componentes: \n\n-Placa Madre: ASUS ROG Strix Z690-E Gaming WiFi \n\n-Memoria RAM: Corsair Vengeance DDR5 32 GB (2 x 16 GB) 6000 MHz \n\n-Tarjeta Gráfica: NVIDIA GeForce RTX 3070 \n\n-Almacenamiento: Samsung 980 Pro 1 TB NVMe M.2 PCIe Gen 4.0 \n\n-Fuente de Poder: Corsair RM850x 850W 80 Plus Gold. \n\nYa con esto tendrías una PC lo suficientemente buena para correr todos tus juegos en una calidad de 1080p a 60 fotogramas por segundo como lo mínimo.");
        }
    });
}


function mostrarMenu() {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = `
    <h1>¡Bienvenid@ a la tienda de computadoras!</h1>
        <h2>Registro de usuario</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Ingresa tu nombre">
        <label for="edad">Edad:</label>
        <input type="number" id="edad" placeholder="Ingresa tu edad">
        <button onclick="registrarDatos()">Registrar</button>
    <p>¿Con qué marca de procesadores te gustaría continuar?</p>
    <button id="intelBtn">Procesadores Intel</button>
    <button id="amdBtn">Procesadores AMD</button>
    <button id="cancelarBtn">Cancelar</button>
  `;


    document.getElementById('intelBtn').addEventListener('click', function () {
        mostrarProcesadores('Intel');
    });

    document.getElementById('amdBtn').addEventListener('click', function () {
        mostrarProcesadores('AMD');
    });

    document.getElementById('cancelarBtn').addEventListener('click', function () {
        alert("Armado cancelado");
    });
}


function registrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    if (nombre && edad) {
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('edad', edad);
        alert("Datos registrados exitosamente!");
    } else {
        alert("Por favor, ingresa tanto el nombre como la edad.");
    }
}


function mostrarDatosGuardados() {
    const nombreGuardado = localStorage.getItem('nombre');
    const edadGuardada = localStorage.getItem('edad');
}


document.addEventListener('DOMContentLoaded', function () {
    mostrarDatosGuardados();
    mostrarMenu();
});
