import Button, { ButtonType } from "./components/button/button"

function App() {

  return (
    <div className="App">
      <h2>App</h2>
      <Button  btnType={ButtonType.Default} disabled={true}>aaa</Button>
      <Button autoFocus btnType={ButtonType.Default} disabled={false}>aaa</Button>
      <Button btnType={ButtonType.Primary} disabled={false}>aaa</Button>
      <Button btnType={ButtonType.Link}>aaa</Button>
    </div>
  )
}

export default App
