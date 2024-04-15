import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('effect', { enabled })
  }, [enabled])

  const checkEstado = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <h3>PROYECTO 3</h3>

      <button onClick={checkEstado}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}

export default App
