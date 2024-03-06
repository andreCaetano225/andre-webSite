


export const Header = () => {
    return (
        <header className="flex items-center h-16 w-full bg-slate-600 fixed z-40 backdrop-blur-lg shadow-lg bg-colorJoker/50 transition-all duration-300 ">
            <div className="flex h-full w-full items-end justify-between px-4">
                <div>Logo</div>

                <nav >
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}