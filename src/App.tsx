import './App.css'
import Menu from './components/menu/menu'
import Transition from './pages/transition.tsx/transition'
import Humburger from './ui/hamburger/hamburger'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const mobileMenuIsOpen = atom({
  key: 'mobileMenuIsOpen',
  default: false,
});

function App() {
  return (
    <RecoilRoot>
      <div className='page bg-my-gray min-h-screen w-screen flex flex-row text-xl font-normal max-xl:text-base max-md:text-xs'>
      <div className="h-full w-[200px] flex-shrink-0 max-md:hidden"></div>
      <Humburger />
      <Menu />
      <Transition/>
      </div>
    </RecoilRoot>
  )
}

export default App
