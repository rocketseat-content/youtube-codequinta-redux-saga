import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>App</h1>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
