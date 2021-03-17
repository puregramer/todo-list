import Storage from "./Storage";
import DOM from "./DOM";

export default class Todo {
    constructor(target) {
        this.target = target;
        this.storage = new Storage("todoList");
        this.list = this.storage.getStorage();
        console.log("Todo: ", this);
        this.init();
        this.renderList();
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
                class: "todoInput",
                placeholder: "할 일을 입력해주세요."
            },
            parent: this.todoListBox
        });

        this.addButton = DOM.createElement("button", {
            attrs: {
                class: "addButton"
            },
            text: "추가",
            parent: this.todoListBox
        });
        this.addButton.addEventListener("click", this.addToDo.bind(this));

        this.todoItemBox = DOM.createElement("div", {
            attrs: {
                class: "todoItemBox"
            },
            parent: this.todoListBox
        });

        this.deleteAllButton = DOM.createElement("button", {
            attrs: {
                class: "removeAllButton"
            },
            text: "전체삭제",
            parent: this.target
        });
        this.deleteAllButton.addEventListener("click", this.removeAll.bind(this));
    }

    renderList() {
        this.todoItemBox.innerHTML = "";
        if (this.list.length > 0) {
            this.list.forEach(item => {
                const toDoItem = DOM.createElement("div", {
                    attrs: {
                        class: "toDoItem"
                    },
                    text: item.text,
                    parent: this.todoItemBox
                });
                const removeButton = DOM.createElement("button", {
                    attrs: {
                        class: "removeButton"
                    },
                    text: "X",
                    parent: toDoItem
                });
                removeButton.addEventListener("click", () => {
                    this.removeTodo(item.id);
                });
            });
        } else {
            const emptyList = DOM.createElement("div", {
                attrs: {
                    class: "emptyList"
                },
                text: "등록된 ToDo 아이템이 없습니다.",
                parent: this.todoItemBox
            });
        }
    }

    addToDo(e) {
        console.log(this.todoInput.value);
        const input = this.todoInput.value;
        if (input) {
            this.insertTodo(input);
            this.todoInput.value = "";
        }
    }

    insertTodo(input) {
        this.list.push({
            id: Date.now(),
            text: input
        });
        this.update();
    }

    update() {
        this.storage.setItem(this.list);
        this.renderList();
    }

    removeTodo(id) {
        this.list = this.list.filter(item => item.id !== id);
        this.update();
    }

    removeAll() {
        this.list = [];
        this.update();
    }

}