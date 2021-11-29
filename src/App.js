import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>List of Tasks</h2>
        <ul>
          <li>Organize Garage</li>
          <li>Bake Cookies</li>
          <li>Take Out Trash</li>
          <li>Feed Dogs</li>
          <li>Cook Dinner</li>
        </ul>
        <form>
          <input/>
        </form>
        <button>Add Task</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default App;
