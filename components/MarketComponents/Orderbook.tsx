
export default function () {

    const Asks = [
        { price: 30010.0, size: 0.3842 },
        { price: 30009.5, size: 0.155 },
        { price: 30009.0, size: 0.2104 },
        { price: 30008.5, size: 0.125 },
        { price: 30008.0, size: 0.5021 },
        { price: 30007.5, size: 0.0982 },
        { price: 30007.0, size: 0.25 },
        { price: 30006.5, size: 0.1675 },
        { price: 30006.0, size: 0.3 },
        { price: 30005.5, size: 0.12 },
        { price: 30005.0, size: 0.431 },
        { price: 30004.5, size: 0.05 },
        { price: 30004.0, size: 0.2 },
    ]
    const Bids = [
        { price: 30004.0, size: 0.365 },
        { price: 30003.5, size: 0.18 },
        { price: 30003.0, size: 0.412 },
        { price: 30002.5, size: 0.09 },
        { price: 30002.0, size: 0.275 },
        { price: 30001.5, size: 0.35 },
        { price: 30001.0, size: 0.145 },
        { price: 30000.5, size: 0.21 },
        { price: 30000.0, size: 0.52 },
        { price: 29999.5, size: 0.08 },
        { price: 29999.0, size: 0.23 },
        { price: 29998.5, size: 0.17 },
        { price: 29998.0, size: 0.4 },
    ]

    return (
        <div>
            <div className="flex justify-between w-[15%] bg-red-500/50">
                <div className="">
                    {Bids.map((a) => (<div key={a.price}>{a.price}</div>))}
                </div>
                <div>
                    {Bids.map((a) => (<div key={a.price}>{a.size}</div>))}
                </div>
            </div>

            <div className="flex justify-between w-[15%] bg-green-500/50">
                <div className="">
                    {Bids.map((a) => (<div key={a.price}>{a.price}</div>))}
                </div>
                <div>
                    {Bids.map((a) => (<div key={a.price}>{a.size}</div>))}
                </div>
            </div>
        </div>
    )
}