import SeacrhInput from "./SearchInput";

export default function Header(){
    return (
        <nav className="flex justify-between p-8 bg-card items-center gap-4">
            <div>GamesHub</div>
            <SeacrhInput />
        </nav>
    );
}