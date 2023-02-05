import { useState } from 'react'
import {MyRCFieldForm} from './pages/MyRCFieldForm'
import AntdFormPage from './pages/AntdFormPage'

function App() {
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    document.body.className.includes('dark') ? document.body.className = '' : document.body.className = 'dark'
  }

  return (
    <div className="app">
      <h2>React</h2>
      <MyRCFieldForm />
      {/* <AntdFormPage /> */}
    </div>
  )
}

export default App
