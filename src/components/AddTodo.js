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

  handleSubmit = e => {
    e.preventDefault();

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
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            onChange={this.handleInputChange}
            placeholder="New Todo"
            value={this.state.todo}
            className="form-control"
            style={{ display: "inline-block" }}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
