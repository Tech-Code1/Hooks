import { useState } from "react"
import { useForm } from "../../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

   const { description, onInputChange, onResetForm } = useForm({
        description: '',
   })

   const onFormSubmit = (event, todo) => {
        event.preventDefault()

        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo && onNewTodo(newTodo)
        onResetForm()
    }

  return (
    
        
        <form action="" onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="¿Que hay que hacer?" 
                className="form-control"
                value={description}
                onChange={onInputChange}
                name="description"
            />
            <button
                type="submit" 
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    
  )
}
