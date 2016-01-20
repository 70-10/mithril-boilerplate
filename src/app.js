import m from "mithril";
import Todo from "./component";
import TodoModel from "./model";

const model = new TodoModel();
const component = new Todo(model.vm);
const region = document.getElementById("app");

m.mount(region, component);
