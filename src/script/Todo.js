import Storage from "./Storage";
import DOM from "./DOM";

export default class Todo {
    constructor(target) {
        this.target = target;
        this.storage = new Storage("todoList");

        console.log("Todo: ", this);
        this.init();
        this.initList();

        // Date.now()
    }

    init() {
        this.todoListBox = DOM.createElement("div", {
            attrs: {
                class: "todoListBox"
            },
            parent: this.target
        });

        this.todoInput = DOM.createElement("input", {
            attrs: {
                class: "todoInput"
            },
            parent: this.todoListBox
        });

      /*  this.deleteButton = DOM.createElement("button", {
            attrs: {
                class: "deleteButton"
            },
            text: "삭제",
            parent: this.todoListBox
        });*/


        this.addButton = DOM.createElement("button", {
            attrs: {
                class: "addButton"
            },
            text: "추가",
            parent: this.todoListBox
        });
        this.addButton.addEventListener("click", this.addToDo);

        this.deleteAllButton = DOM.createElement("button", {
            attrs: {
                class: "deleteAllButton"
            },
            text: "전체삭제",
            parent: this.target
        });
    }

    initList() {
        if (this.storage.length > 0) {
            this.storage.forEach(item => {

            });
        } else {
            const emptyList = DOM.createElement("div", {
                attrs: {
                    class: "emptyList"
                },
                text: "등록된 ToDo 아이템이 없습니다.",
                parent: this.todoListBox
            });
        }

    }

    addToDo(e) {
        console.log(this.todoInput.value);


    }

    delToDo() {

    }

    deleteAll() {

    }

}