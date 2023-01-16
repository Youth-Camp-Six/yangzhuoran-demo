import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/button/button'

function App() {
  return (
    <div className="App">
      <h2>App</h2>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Default} disabled={true}>
        Default disabled
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary Large
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Primary Small
      </Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Link
      </Button>
    </div>
  )
}

export default App
