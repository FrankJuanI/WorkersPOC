if (window.Worker) {
    const myWorker = new Worker('worker.js');
    
    myWorker.postMessage(40); 
    console.log('Mensaje enviado al worker');

    console.log("Ejecutar otra cosa en paralelo")
    myWorker.onmessage = function(e) {
        console.log('Mensaje recibido del worker:', e.data);
    };
    
    console.log("Ejecutar otra cosa en paralelo")
    myWorker.onerror = function(e) {
        console.error('Error en el worker:', e);
    };
} else {
    console.log('Tu navegador no soporta Web Workers.');
}
