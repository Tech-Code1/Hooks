import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { useTodos } from "./hooks/useTodos";


export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, onNewTodo} = useTodos()

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">

            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
            </div>
        
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={onNewTodo}/>
            </div>

        </div>
    </>
  )
}
