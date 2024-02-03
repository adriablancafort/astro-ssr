import type { CartItem } from "../types/CartItem";
import { deleteFromCart, updateQuantity } from "../stores/Cart";

export default function CartItem({ item }: { item: CartItem }) {
    return (
        <li className="relative flex space-x-4 items-center">

            <img className="skeleton w-1/2" src={item.image} alt={item.title} />

            <div className="w-1/2">

                <span className="absolute -top-1 -left-1 text-[10px] px-1 text-white bg-custom-red rounded-sm" >-12%</span>

                <span className="font-semibold text-lg leading-3">{item.price.toFixed(2)}€</span>
                <p className="text-sm text-gray-600">Color: <span className="text-black font-semibold">{item.color}</span></p>
                <p className="text-sm text-gray-600">Size: <span className="text-black font-semibold">{item.variation}</span></p>

                <div className="flex space-x-2 py-1">

                    <input className="w-10" type="number"  min="1"  value={item.quantity}  max={item.stock}  onChange={(event) => updateQuantity(item, parseInt((event.target as HTMLInputElement).value))} />
                    <button onClick={() => deleteFromCart( item )} className="px-0.5 border rounded hover:bg-gray-100">
                        <img src="/images/trash-icon.svg" width="16px" height="14px" />
                    </button>

                </div>

            </div>

        </li>
    );
}
