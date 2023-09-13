// 3.1 - AGENDA

class Contact {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

class ContactManager {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    findContactByName(name) {
        return this.contacts.find(contact => contact.name === name);
    }

    updateContact(name, newContact) {
        const index = this.contacts.findIndex(contact => contact.name === name);
        if (index !== -1) {
            this.contacts[index] = newContact;
        }
    }

    deleteContact(name) {
        const index = this.contacts.findIndex(contact => contact.name === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }

    printContacts() {
        console.log("Contatos:");
        this.contacts.forEach(contact => console.log(`Nome: ${contact.name}, Telefone: ${contact.phone}, Email: ${contact.email}`));
    }
}

const contact1 = new Contact("Alice", "123-456", "alice@example.com");
const contact2 = new Contact("Bob", "789-123", "bob@example.com");

const manager = new ContactManager();
manager.addContact(contact1);
manager.addContact(contact2);
manager.printContacts();

const alice = manager.findContactByName("Alice");
console.log("Encontrou:", alice);

manager.updateContact("Alice", new Contact("Alice", "111-222", "alice@new.com"));
manager.printContacts();

manager.deleteContact("Alice");
manager.printContacts();

