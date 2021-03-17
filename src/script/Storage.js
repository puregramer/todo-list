
export default class Storage {
    constructor(name) {
        this.name = name;
        this.storage = JSON.parse(window.localStorage.getItem(this.name)) || [];
    }

    getStorage() {
        return this.storage;
    }

    setItem(storage) {
        window.localStorage.setItem(this.name, JSON.stringify(storage));
    }

    clear() {
        window.localStorage.removeItem(this.name);
    }

}