function Search() {

  return (
      <div className='block w-[620px] rounded-[10px] relative overflow-hidden after:content-[""] after:absolute
       after:h-4 after:w-4 after:bg-search after:top-1/2 after:-translate-y-1/2 after:right-[17px] cursor-pointer'><input className="focus-visible:outline-none w-full h-full py-[11px] px-[18px] bg-white " placeholder="Search.." /></div>
      
    )
  }
  
  export default Search