import { useEffect, useState } from "react"

export const Message = () => {

 const [coords, setCoords] = useState({x: 0, y: 0})

 useEffect(() => {

   const onMouseMove = ({x,y}) => {
    setCoords({x, y})
   }

   window.addEventListener('mousedown', onMouseMove)
 
   return () => {
    window.removeEventListener('mousedown', onMouseMove)
   }
 }, [])
 


  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
