// 2.4 PRINTER - CÓDIGO REFATORADO

class PrinterQueue2 {
    constructor() {
        this.queue = [];
    }

    addJob(job) {
        if (job) {
            this.queue.push(job);
            console.log(`Job '${job}' added to the queue!`);
        } else {
            console.log("Invalid job. Please add a valid job.");
        }
    }

    printNext() {
        if (this.queue.length > 0) {
            console.log(`Printing the job: '${this.queue.shift()}'`);
        } else {
            console.log("No job in the queue!");
        }
    }

    viewQueue() {
        if (this.queue.length > 0) {
            console.log("Print Queue:");
            this.queue.forEach((job) => console.log(job));
        } else {
            console.log("Print queue is empty.");
        }
    }
}

// Exemplo de Utilização
const printerQueue2 = new PrinterQueue2();
printerQueue2.addJob('Document1'); // Saída: Job 'Document1' added to the queue!
printerQueue2.addJob('Document2'); // Saída: Job 'Document2' added to the queue!
printerQueue2.viewQueue();         // Saída: Print Queue: Document1, Document2
printerQueue2.printNext();         // Saída: Printing the job: 'Document1'
printerQueue2.viewQueue();         // Saída: Print Queue: Document2
