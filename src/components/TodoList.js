import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../reducers";

const TodoList = props => (
  <ol>
    {props.todo
      .filter(item => !item.done)
      .map((item, index) => (
        <li onClick={() => props.toggleTodo(item.id)} key={index}>
          {item.content}
        </li>
      ))}
  </ol>
);

const mapStateToProps = state => ({
  todo: state.todo
});

const mapActionToProps = { toggleTodo };

export default connect(
  mapStateToProps,
  mapActionToProps
)(TodoList);
