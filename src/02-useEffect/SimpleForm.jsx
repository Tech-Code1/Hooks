import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'David',
        email: 'david@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        //console.log('useEffect Called');
    }, []);

    useEffect( () => {
        //console.log('fromstate Called');
    }, [formState]);

    useEffect( () => {
        //console.log('email Called');
    }, [email]);

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="example@hotmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
            username === 'David' && <Message />
        }
        
    </>
  )
}
