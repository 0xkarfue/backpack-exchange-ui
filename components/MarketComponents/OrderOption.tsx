import { Btn1, Btn2 } from "./Button";
import Input from "./Input";
import Range from "./Range";

export default function () {
    return (
        <div className="w-[20%] rounded-2xl bg-gray-700 p-4  m-4">
            <h3 className="m-2 text-neutral-900">Avalaible Equity</h3>
            <h3 className="m-2 text-neutral-900">Price</h3>
            <Input placeholder="price" />
            <h3 className="m-2 text-neutral-900">Quantity</h3>
            <Input placeholder="0" />
            <Range />
            <h3 className="m-2 text-neutral-900">Order Value</h3>
            <Input placeholder="0" />
            <h3 className="m-2 text-neutral-900">Margin Required</h3>
            <h3 className="m-2 text-neutral-900">Est. Liquidation Price</h3>
            <Btn1 />
            <br />
            <Btn2 />
        </div>
    )
}