import { useState } from "react"

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? "none" : ""}
  const showWhenVisible = { display: visible ? "" : "none"}

  const toggleVisibility = () => {
    setVisible(!visible)
  }

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
}

export default Togglable