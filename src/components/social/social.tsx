function Social() {

    return (
        <div className="flex flex-col gap-2">
            <a className="flex flex-row gap-1 opacity-50 hover:opacity-100 transition-all ease-out cursor-pointer" href="#">
                <div><img src="public/images/android.png" alt=""/></div>
                <span className="text-black ">Android</span>
            </a>   
            <a className="flex flex-row gap-1 mb-8 opacity-50 hover:opacity-100 transition-all ease-out cursor-pointer" href="#">
                <div><img src="public/images/ios.png" alt=""/></div>
                <span className="text-black">App Store</span>
            </a>
            <div className="flex flex-row gap-6">
                <a className="opacity-50 hover:opacity-100 transition-all ease-out cursor-pointer" href="#"><img src="public/images/telegram.png" alt=""/></a>
                <a className="opacity-50 hover:opacity-100 transition-all ease-out cursor-pointer" href="#"><img src="public/images/youtube.png" alt=""/></a>
                <a className="opacity-50 hover:opacity-100 transition-all ease-out cursor-pointer" href="#"><img src="public/images/tviter.png" alt=""/></a>
            </div>
      </div>
    )
  }
  
  export default Social