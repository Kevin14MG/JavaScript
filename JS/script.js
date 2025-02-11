console.log("El script esta funcionando correctamente")


// Pre Entrega Numero 1

let opcion;
const Intel = ["Intel Core i7-13700K", "Intel Core i5-13600K"];
const AMD = ["Procesador AMD Ryzen 5 4600G", "Procesador AMD Ryzen 7 5700X"];

function procesadoresAmd() {
    alert("Estos son los 2 procesadores AMD mas usados por la comunidad actualmente!");
    alert(AMD.join("\n\n"));
    const verComputadora = confirm("¿Quieres saber cual es LA MEJOR computadora armada con el procesador Ryzen 7 5700X?");

    if (verComputadora) {
        alert("En base al Ryzen 7 5700X usaria: \n\n-Placa Madre: ASUS ROG Strix X570-E Gaming \n\n-Memoria RAM: 16 GB o 32 GB de RAM DDR4 (velocidad mínima de 3200 MHz o 3600 MHz) \n\n-Tarjeta Grafica Dependiendo del uso (gaming, edición de video, etc.), puedes optar por: NVIDIA GeForce RTX 3070 o AMD Radeon RX 6700 XT \n\n-Almacenamiento: 1 TB NVMe M.2 SSD para el sistema operativo y programas. \n\n-Fuente de Poder: 750W - 850W de una marca confiable, con certificación 80 Plus Gold. \n\nYa con esto tendrias una PC lo suficientemente buena para correr todos tus juegos en una calidad de 1080p a 60 fotogramas por segundo como lo minimo. Si te sirvio aprueba este trabajo!. (EasterEgg)")
    }
}
function procesadoresIntel() {
    alert("Estos son los 2 procesadores INTEL mas usados por la comunidad actualmente!");
    alert(Intel.join("\n\n"));
    const verComputadora = confirm("¿Quieres saber cual es LA MEJOR computadora armada con el Intel Core i7-13700K?");
    if (verComputadora) {
        alert("Tomando como base al procesador mas potente (Intel Core i7-13700k) armaremos una computadora con estos componentes: \n\n-Placa Madre: ASUS ROG Strix Z690-E Gaming WiFi \n\n-Memoria Ram: Corsair Vengeance DDR5 32 GB (2 x 16 GB) 6000 MHz \n\n-Tarjeta Grafica: NVIDIA GeForce RTX 3070 \n\n-Almacenamineto: Samsung 980 Pro 1 TB NVMe M.2 PCIe Gen 4.0 \n\n-Fuente de Poder: Corsair RM850x 850W 80 Plus Gold. \n\nYa con esto tendrias una PC lo suficientemente buena para correr todos tus juegos en una calidad de 1080p a 60 fotogramas por segundo como lo minimo. ")
    }
}


do {
    opcion = parseInt(prompt("Bienvenid@s!! \n\nSumergete en el mundo de las computadoras! \n\n¿Con que marca de procesadores te gustaria continuar? \n\n1. Procesadores INTEL \n2. Procesadores AMD \n\nPara cancelar oprima 0. "))

    if (opcion === 0) {
        alert("armado cancelado");
    }

    else if (opcion === 1) {
        procesadoresIntel();
    }

    else if (opcion === 2) {
        procesadoresAmd();

    }

    else { alert("opcion invalida") }

} while (opcion !== 0) 