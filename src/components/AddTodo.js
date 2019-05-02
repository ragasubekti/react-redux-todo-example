import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../reducers";

class AddTodo extends React.Component {
  state = {
    todo: ""
  };

  handleInputChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.todo.length <= 0) {
      return alert("You need to type something!");
    }

    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          placeholder="New Todo"
          value={this.state.todo}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
