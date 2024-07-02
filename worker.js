self.onmessage = function(e) {
    console.log('Mensaje recibido del hilo principal:', e.data);
    let result = computeFibonacci(e.data); 
    self.postMessage(result);
};

function computeFibonacci(num) {
    if (num <= 1) return num;
    return computeFibonacci(num - 1) + computeFibonacci(num - 2);
}
