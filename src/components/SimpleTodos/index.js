import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    status: 'unchecked',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    status: 'unchecked',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    status: 'unchecked',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    status: 'unchecked',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    status: 'unchecked',
  },
  {
    id: 6,
    title: 'Fix the production issue',
    status: 'unchecked',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    status: 'unchecked',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    status: 'unchecked',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodo = id => {
    const {todoList} = this.state
    const tempList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: tempList})
  }

  onCheckTodo = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.map(eachTodo => {
      if (eachTodo.id === id) {
        const object = {
          ...eachTodo,
          status: eachTodo.status === 'checked' ? 'unchecked' : 'checked',
        }

        return object
      }

      return eachTodo
    })
    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="bg-container">
        <div className="todos-card">
          <h1 className="title">Simple Todos</h1>
          <ul className="todos-list">
            {todoList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                removeTodo={this.deleteTodo}
                status={eachTodo.status === 'unchecked'}
                onCheckTodo={this.onCheckTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
