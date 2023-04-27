import { cn } from "../../utils/cn.ts";

const themes = {
    light: "bg-white border-my-blue text-black hover:bg-my-blue hover:text-white",
    grey: "bg-my-button-gray text-white hover:bg-white hover:text-black",
}

interface Props { 
    className?: string;
    theme?: "light" | "grey";
}

function Button({ children, className, theme="light" }:React.PropsWithChildren<Props>) {

    return (
        <button className={cn("py-[11px] px-8 inline-block border-1 rounded-[10px] font-medium hover:border-transparent active:border-transparent focus:outline-none transition-all ease-out", themes[theme], className)}>{children}</button>
    )
  }
  
  export default Button