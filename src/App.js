import React, { PureComponent } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import FormicForm from './components/Form';
import ToDO from './containers/todos/todo';
import configureStore from './redux/todo/store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends PureComponent {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Redux React Boilerplate</h1>
          </header>
          <ToDO />
          <FormicForm />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
