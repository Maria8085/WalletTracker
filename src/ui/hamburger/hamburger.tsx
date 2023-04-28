
import "./style.css"
import {
  useRecoilState,
} from 'recoil';
import { mobileMenuIsOpen } from '../../App';
import { cn } from "../../utils/cn";

export default function Humburger() {
  const [isOpen, setIsOpen] = useRecoilState(mobileMenuIsOpen);

  const onChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={onChange} className="hamburger md:hidden">
      <div className={cn(isOpen && "top-bun" )}></div>
    <div className={cn(isOpen && "meat" )}></div>
    <div className={cn(isOpen && "bottom-bun" )}></div>
  </button>
  )
}