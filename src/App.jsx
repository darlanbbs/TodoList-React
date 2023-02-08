import Todo from './Todo.jsx'

import './Index.css'
function App({id}) {

  return(
    <div id='app'>
      <Todo key={id}/> 
    </div>
  )
}

export default App
