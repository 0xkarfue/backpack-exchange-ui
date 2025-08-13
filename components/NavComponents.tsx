export function Logo() {
    return (
        <div className="w-32 h-16 flex items-center justify-center overflow-hidden">
            <img className="object-contain scale-125" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9G1SNpePnpglqkezAbv6uINxjYSqFJXuSA&s" alt="" />
        </div>
    )
}

type TradeOptionProps = {
    children: React.ReactNode;
};

export function TradeOption({ children }: TradeOptionProps) {
    return (
        <span className="text-xl text-gray-500">{children}</span>
    )
}

export function Search() {
    return (
        <div>
            <input type="text" placeholder="Search markets"
            className="rounded-md p-2 w-80 bg-gray-600" />
        </div>
    )
}

export function AuthBtns() {
    return (
        <div>
            <button className="rounded-md bg-green-500/50 px-4 py-2 text-green-500 m-2">Sign up</button>
            <button className="rounded-md bg-blue-500/50 px-4 py-2 text-blue-500 m-2">Sign in</button>
        </div>
    )

}