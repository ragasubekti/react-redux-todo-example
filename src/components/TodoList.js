import React from "react";
import { connect } from "react-redux";

const TodoList = props =>
  props.todo.map((item, index) => <li key={index}>{item.content}</li>);

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(TodoList);
