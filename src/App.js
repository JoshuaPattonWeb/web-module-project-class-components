import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077287,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Take Out Trash',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Feed Dogs',
          id: 1528817084355,
          completed: false
        },
        {
          task: 'Cook Dinner',
          id: 1528817084353,
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    })
  }

  handleRemove = () => {
    this.setState({
        ...this.state,
        todos: this.state.todos.filter(todo => {
            return (todo.completed === false)
        })
    })
}

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const {todos} = this.state
    return (
      <div>
        <h2>List of Tasks</h2>
        
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleRemove}>Clear</button>
      </div>
    );
  }
}

export default App;
