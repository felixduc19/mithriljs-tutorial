class AddTodoComponent {
  constructor(vnode) {}

  setInput(value) {
    globalState.todoInput = value;
    console.log(`Set value = ${globalState.todoInput}`);
  }

  handleInput(e) {
    // if(e.keyCode === 13)
    // 	this.add()
    // else
    this.setInput(e.target.value);
  }

  add() {
    globalState.todoInput = globalState.todoInput.trim();
    const newValue = {
      value: globalState.todoInput,
      editing: false,
    };
    globalState.todos.push(newValue);
    this.setInput("");
  }

  update() {
    const currentTodos = globalState.todos;

    const editingTodo = currentTodos.find((item) => item.editing);

    editingTodo.value = globalState.todoInput;
    editingTodo.editing = false;
    this.setInput("");
  }

  view() {
    // console.log("isEditing", isEditing);
    const isEditing = globalState.todos.some((item) => !!item.editing);
    return m(
      "footer",
      { class: "footer" },
      m(
        "form",
        {
          name: "todos",
          class: "footer__wrapper",
          "data-action": "add",
          onsubmit: (e) => {
            e.preventDefault();
            // this.setInput(document.forms.todos.todo.value)
            isEditing ? this.update() : this.add();
          },
        },
        m("div", { class: "form-box" }, [
          m("input", {
            name: "todo",
            class: "form-box__input",
            type: "text",
            placeholder: "add todo...",
            oninput: (e) => this.handleInput(e),
            // onkeyup: (e) => { this.handleInput(e) },
            value: globalState.todoInput,
          }),
          m("button", { class: "form-box__btn", type: "submit" }, !isEditing ? "Add" : "Update"),
        ])
      )
    );
  }
}
