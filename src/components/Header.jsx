export default function Header(){
    return (
        <nav className="flex justify-between py-8 px-6 bg-card">
            <div>GamesHub</div>
            <div className="flex gap-6">
                <div>Home</div>
                <div>About</div>
            </div>
        </nav>
    );
}