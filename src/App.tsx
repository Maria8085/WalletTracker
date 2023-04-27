import './App.css'
import Menu from './components/menu/menu'
import Transition from './pages/transition.tsx/transition'

function App() {

  return (
    <div className='page bg-my-gray min-h-screen w-screen flex flex-row'>
      <div className="h-full w-[200px]"></div>
      <Menu />
      <Transition/>
    </div>
  )
}

export default App
