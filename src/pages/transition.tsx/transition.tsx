import Profile from "../../components/profile/profile"
import Refill from "../../components/refill/refill"
import Search from "../../components/search/search"
import Tabs from "../../components/tabs/tabs"
import Button from "../../ui/button/button"

function Transition() {

  return (
      <div className='px-[140px] py-9 min-h-screen flex flex-col gap-16 flex-grow max-xl:px-20 max-lg:px-12 max-lg:py-6 max-md:px-6 max-md:py-3 max-md:gap-8 max-sm:px-4'>
          <div className="flex flex-row gap-6 justify-between mb-10 items-start max-md:flex-col max-md:items-end max-md:mb-3 max-md:pl-12">
              <Search />
              <div className="flex flex-row gap-6 items-start shrink-0 max-md:justify-end">
                  <Refill/>
                  <Button>Connect Wallet</Button>
              </div>
          </div>
          <Profile/>
          <Tabs/>
      </div>
  )
}

export default Transition
