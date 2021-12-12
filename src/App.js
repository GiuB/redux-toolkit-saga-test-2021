import './App.css'
import { Provider } from 'react-redux'
import store from './store'

import Counter from './components/Counter'
import Users from './components/Users'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Redux Counter</h2>
        <Counter />
        <Users />
      </div>
    </Provider>
  )
}

export default App
