
export default class Storage {
    constructor(name) {
        this.name = name;
        this.storage = window.localStorage.getItem(this.name) || [];

        console.log("Storage: ", this);
    }

    getStorage() {
        return this.storage;
    }

    /*insert(item) {
        this.storage.push(item);
    }*/

    remove(id) {
        this.storage = this.storage.filter(item => item.id !== id);
    }

    setItem(storage) {
        window.localStorage.setItem(this.name, storage);
    }

    clear() {
        window.localStorage.removeItem(this.name);
    }

}