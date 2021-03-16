import Storage from "./Storage";

export default class Todo {
    constructor(target) {
        this.target = target;
        this.storage = new Storage("todoList");

        console.log("Todo: ", this);
        this.init();
    }

    init() {

    }



    renderList() {

    }

}