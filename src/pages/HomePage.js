class HomePage {
  view() {
    return m("div", [m("p", "Welcome to todo app"), m("a", { href: "#!/todo" }, "Go to Todo Page!")]);
  }
}
