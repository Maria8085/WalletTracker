import Button from "../../ui/button/button"
import "./style.css";

function Profile() {

  return (
      <div className='w-full flex flex-row gap-11 items-center'>
          <div className="w-[230px] h-[230px] rounded-3xl bg-white overflow-hidden">
              <img className="w-full h-full object-cover" src="public/images/Profile.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 cursor-pointer">
                  <span className="text-my-gray02">0xd8da..6045</span>
                  <div className="search w-5 h-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="8" width="11" height="11" rx="2" fill="white" stroke="#AEBBC8" stroke-width="2"/>
                        <rect x="8" y="1" width="11" height="11" rx="2" fill="white" stroke="#AEBBC8" stroke-width="2"/>
                    </svg>
                  </div>
              </div>
              <span className="text-black text-6xl font-medium">261 240 496<span className="text-my-gray03">$</span></span>
              <span className="text-my-green font-medium">+2,5% (6 333 222 $)</span>
          </div>
          <Button theme="grey">Follow</Button>
      </div>
  )
}

export default Profile
