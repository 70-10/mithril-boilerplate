import m from "mithril";

class Component {
  constructor(props = {}) {
    this.props = props;
  }

  controller() {}
  view() {}
}

export default class Todo extends Component {
  constructor(props = {}) {
    super(props);
  }

  controller() {}

  view() {
    const createTask = task => {
      return (
        <tr>
          <td><input type="checkbox" onclick={m.withAttr("checked", task.done)} checked={task.done()} /></td>
          <td style={task.done() ? "text-decoration: line-through" : "text-decoration: none"}>
            {task.description()}
            <button onclick={this.props.clear.bind(this.props, task)}>Clear</button>
          </td>
        </tr>
      );
    };
    return (
      <div>
        <input onchange={m.withAttr("value", this.props.description)} value={this.props.description()} />
        <button onclick={this.props.add.bind(this.props, this.props.description)}>Add</button>
        <table>
          {
            this.props.list.map(task => createTask(task))
          }
        </table>
      </div>
      );
  }
}
