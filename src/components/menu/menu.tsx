import Social from "../social/social"

function Menu() {

  return (
    <div className='h-full w-[200px] bg-white flex flex-col justify-between py-9 items-center fixed'>
          <div className="w-32 h-8 cursor-pointer"><img className="w-full h-full object-contain" src="public/images/Logo.png" alt=""/></div>
          <nav className="flex flex-col justify-between items-start gap-y-2.5">
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Profile</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Tracker</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Favorites</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Whales</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Swap</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Ranking AI</span>
              <span className="hover:bg-my-gray w-full py-2 px-6 rounded relative hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-2 hover:after:w-1 hover:after:h-4 hover:after:bg-my-blue hover:after:rounded cursor-pointer active:bg-opacity-70 transition-all ease-out">Copy-trading</span>
          </nav>
      <Social/>
    </div>
  )
}

export default Menu