import { Logo, TradeOption, AuthBtns, Search } from "./NavComponents";

export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-3 text-white">
        
        {/* Left section: Logo + Trade Options */}
        <div className="flex items-center gap-6">
          <Logo />
          <div className="flex gap-4">
            <TradeOption>Spot</TradeOption>
            <TradeOption>Futures</TradeOption>
            <TradeOption>Lent</TradeOption>
            <TradeOption>More</TradeOption>
          </div>
        </div>
        <Search />
        <AuthBtns />
      </nav>
    </div>
  );
}








// import { Logo, TradeOption, AuthBtns, Search } from "./NavComponents";

// export default function () {
//     return (
//         <div>
//             <nav className="flex justify-between">
//                 <div className="flex justify-between">

//                     <Logo />
//                 <div className="p-4 gap-2">
//                     <TradeOption children={"Spot"} />
//                     <TradeOption children={"Futures"} />
//                     <TradeOption children={"Lent"} />
//                     <TradeOption children={"More"} />
//                 </div>
//                 </div>
//                 <Search />
//                 <div>
//                     <AuthBtns />
//                 </div>
//             </nav>
//         </div>
//     )
// }

