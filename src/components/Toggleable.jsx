import { useState, forwardRef, useImperativeHandle } from "react"

//forwardRef() hace que el componente pueda acceder a la referencia que le fue asignada
const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? "none" : ""}
  const showWhenVisible = { display: visible ? "" : "none"}

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  //useImperativeHandle permite que toggleVisibility este disponible fuera del componente
  useImperativeHandle(refs, () => {
    return{
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
      {/* Esta propiedad props.children va a hacer referencia a los props de los componentes hijos de este componente Toggleable, por lo que puedo encerrar a otro componente dentro de esto y hacerlo toggleable. */}
        {props.children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
})

export default Togglable