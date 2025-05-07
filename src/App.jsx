import './App.css'
import Counter from './components/Counter'
import CounterRedux from './components/CounterRedux'

function App() {

  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      {/* <Counter/> */}
      <CounterRedux/>
    </div>
  )
}

export default App
