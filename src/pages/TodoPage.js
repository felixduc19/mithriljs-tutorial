class TodoPage {
  view() {
    return m("div", { class: "app" }, m(ContainerComponent, [m(TodoComponent), m(AddTodoComponent)]));
  }
}
