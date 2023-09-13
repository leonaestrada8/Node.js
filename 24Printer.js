// 2.4 CÓDIGO ORIGINAL
class PrinterQueue {
    constructor() {
        this.queue = [];
    }

    addJob(job) {
        this.queue.push(job);
    }

    printNext() {
        console.log('Printing:', this.queue.shift());
    }

    viewQueue() {
        console.log('Queue:', this.queue);
    }
}

// Exemplo de Utilização
const printerQueue = new PrinterQueue();
printerQueue.addJob('Document1');
printerQueue.addJob('Document2');
printerQueue.viewQueue(); // Saída: Queue: [ 'Document1', 'Document2' ]
printerQueue.printNext(); // Saída: Printing: Document1
printerQueue.viewQueue(); // Saída: Queue: [ 'Document2' ]
