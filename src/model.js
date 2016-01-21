import m from "mithril";

export default class TodoModel {
  constructor() {
    this.vm = new ViewModel(this);
    this.vm.init();
  }

  Todo(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
    return {
      description: this.description,
      done: this.done
    };
  }

  TodoList() {
    return new Array();
  }
}

class ViewModel {
  constructor(model) {
    this.model = model;
  }

  init() {
    this.list = new this.model.TodoList();
    this.description = m.prop("");
    this.add = () => {
      if (this.description()) {
        this.list.push(new this.model.Todo({ description: this.description() }));
        this.description("");
      }
    };

    this.clear = task => {
      this.list = this.list.filter(t => t !== task);
      this.description("");
    };
  }
}
