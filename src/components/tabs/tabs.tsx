import Button from "../../ui/button/button"
import DropDown from "../../ui/dropdown/dropdown"
import Search from "../search/search"
import Table from "../table/table"

function Tabs() {

  return (
      <div className='w-full flex flex-col gap-9 items-start max-md:gap-4'>
        <div className="flex flex-row gap-7 items-center">
          <a className="text-black border-b-2 border-transparent hover:border-b-2 hover:border-my-blue hover:text-black cursor-pointer">Tokens</a>
          <a className="text-black border-b-2 border-transparent hover:border-b-2 hover:border-my-blue hover:text-black cursor-pointer">NFTs</a>
          <a className="text-black border-b-2 border-transparent hover:border-b-2 hover:border-my-blue hover:text-black cursor-pointer">Transactions</a>
          <DropDown/>
        </div>
        <Search />
        <Table />
        <Button className="self-center">Load more</Button>
      </div>
  )
}

export default Tabs
