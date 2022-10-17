import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const reducers = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducers, 0);

const App = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h4>{count}</h4>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => {
      dispatch({ type: "INCREMENT" });
    },
    handleDecrement: () => {
      dispatch({ type: "DECREMENT" });
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
