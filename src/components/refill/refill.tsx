import { useState } from "react";
import DropDown from "../../ui/dropdown/dropdown";
import { cn } from "../../utils/cn";

function Refill() {
  const [isOpen, setIsOpen] = useState(false)
  function clickHandler() { 
    setIsOpen(!isOpen)
  }
  return (
    <div className={cn("bg-white rounded-lg flex flex-col gap-1 shrink-0",!isOpen?"p-0":"py-3 px-4")}>
      <div className="flex flex-row gap-2 cursor-pointer justify-between">
        {isOpen && <span className="font-medium">Цены газа</span>}
        <button onClick={clickHandler} className={cn("flex flex-row gap-2 bg-white focus:outline-none",isOpen?"p-0":"py-3 px-4")}>
          <img className="h-6 w-6 max-md:h-4 max-md:w-4" src="public/images/refill.svg" alt="" />
          <span className="text-my-gray02">110</span>
        </button>
      </div>
      {isOpen && <><DropDown />
        <div className="flex flex-row justify-between">
          <span className="text-my-gray03">Быстро</span>
          <span>66 GWEI</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-my-gray03">Средне</span>
          <span>66 GWEI</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-my-gray03">Медленно</span>
          <span>66 GWEI</span>
        </div>
      </>}
    </div>
  );
}

export default Refill;
