class TodoItem {
  onDeleteTodo(index) {
    const currentTodos = globalState.todos;

    currentTodos.splice(index, 1);

    globalState.todos = currentTodos;
  }

  onEditTodo(todoIndex) {
    console.log(todoIndex);
    console.log("update");
    const currentTodos = globalState.todos;
    const selectedTodos = currentTodos.find((todo, index) => index === todoIndex);
    console.log(selectedTodos);
    selectedTodos.editing = true;
    globalState.todoInput = selectedTodos.value;
  }

  onCancelEditTodo(todoIndex) {
    const currentTodos = globalState.todos;
    const selectedTodos = currentTodos.find((todo, index) => index === todoIndex);
    console.log(selectedTodos);
    selectedTodos.editing = false;
  }

  view(vnode) {
    const todoIndex = vnode.attrs.todo.index;
    console.log(vnode.attrs.todo.todo);
    return m("div", { style: { display: "flex", justifyContent: "spaceBetween" } }, [
      m("p", { style: { flex: 1 } }, `${vnode.attrs.todo.todo.value}`),
      m(
        "button",
        {
          onclick: () => {
            this.onDeleteTodo(todoIndex);
          },
        },
        "Xoá"
      ),
      !!vnode.attrs.todo.todo.editing
        ? m(
            "button",
            {
              onclick: () => {
                this.onCancelEditTodo(todoIndex);
              },
            },
            "Cancel"
          )
        : m(
            "button",
            {
              onclick: () => {
                this.onEditTodo(todoIndex);
              },
            },
            "Edit"
          ),
    ]);
  }
}
