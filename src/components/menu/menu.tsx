import { mobileMenuIsOpen } from "../../App";
import { cn } from "../../utils/cn";
import Social from "../social/social"
import {
  useRecoilState,
} from 'recoil';

function Menu() {
  const [isOpen, setIsOpen] = useRecoilState(mobileMenuIsOpen);
  return (
    <div className={cn(`h-full w-[200px] bg-white  flex flex-col justify-between py-9 items-center fixed transition-all ease-out z-[1]`, !isOpen && "-translate-x-full md:translate-x-0 max-md:text-sm")}>
          <div className="w-32 h-8 cursor-pointer max-md:mt-7"><img className="w-full h-full object-contain" src="public/images/Logo.png" alt="" /></div>
          <nav className="flex flex-col justify-between items-start gap-y-2.5">
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Profile</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Tracker</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Favorites</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Whales</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Swap</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Ranking AI</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out max-md:text-sm">Copy-trading</span>
          </nav>
      <Social/>
    </div>
  )
}

export default Menu