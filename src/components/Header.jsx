import SeacrhInput from "./SearchInput";
import logo from '../assets/logo.png'

export default function Header({ onSearch }){
    return (
        <nav className="flex justify-between px-8 border-b-2 bg-card items-center gap-4">
            <img src={logo} className="size-20" />
            <SeacrhInput onSearch={onSearch} />
        </nav>
    );
}