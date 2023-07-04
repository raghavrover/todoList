import './index.css'

const TodoItem = props => {
  const {todoDetails, removeTodo, status, onCheckTodo} = props
  const {title, id} = todoDetails
  const labelStyles = status ? 'todo' : 'todo checked'

  const deleteTodo = () => {
    removeTodo(id)
  }

  const onSelectingTodo = () => {
    onCheckTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="check-box-and-todo">
        <input
          id={id}
          type="checkbox"
          className="input-check-box"
          onChange={onSelectingTodo}
        />
        <label htmlFor={id} className={labelStyles}>
          {title}
        </label>
      </div>
      <button className="delete-btn" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
