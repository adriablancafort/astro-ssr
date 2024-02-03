import { useStore } from "@nanostores/preact";
import { isCartOpen, numberOfItems, cartSubtotal, cartItems } from "../stores/Cart";
import CartItem  from "./CartItem";

export default function Cart() {
    const $isCartOpen = useStore(isCartOpen);
    const $numberOfItems = useStore(numberOfItems);
    const $cartSubtotal = useStore(cartSubtotal);
    const $cartItems = useStore(cartItems);

    return $isCartOpen ? (
        <aside id="vertical-shopping-cart-node" className="flex flex-col justify-between sticky top-0 h-screen w-60 border-l">

            <div id="vertical-shopping-cart-viewport" className="overflow-hidden h-full">
                <ul className="space-y-4 h-full p-4 cursor-grab">
                    {$cartItems.map((item) => (
                        item && <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>

            <div className="p-4 pb-6 border-t">
                <h4 className="text-lg flex justify-between" >Subtotal: <span className="font-semibold">{$cartSubtotal.toFixed(2)}€</span></h4> 
                <p className="text-sm text-gray-600 flex justify-between pb-4">VAT Included: <span>(23.18€)</span></p>

                <a href="/checkout">
                    <button className="text-white bg-custom-red hover:bg-custom-red-hover focus:ring-1 ring-offset-2 ring-custom-red rounded text-lg px-4 py-1 w-full">Checkout ({$numberOfItems})<span></span></button>
                </a>
            </div>

        </aside>
    ) : null;
}