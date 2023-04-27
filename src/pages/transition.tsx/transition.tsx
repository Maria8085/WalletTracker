import Profile from "../../components/profile.tsx/profile"
import Search from "../../components/search/search"
import Tabs from "../../components/tabs/tabs"
import Button from "../../ui/button/button"

function Transition() {

  return (
      <div className='px-36 py-9 min-h-screen flex flex-col gap-16 flex-grow'>
          <div className="flex flex-row justify-between mb-10">
              <Search />
              <div className="flex flex-row gap-6">
                  <div className="flex flex-row gap-2 text-my-gray02 bg-white rounded-lg py-3 px-4 cursor-pointer">
                      <img className="h-6 w-6" src="public/images/refill.svg" alt="" />
                      <span>110</span>
                  </div>
                  <Button>Connect Wallet</Button>
              </div>
          </div>
          <Profile/>
          <Tabs/>
      </div>
  )
}

export default Transition
