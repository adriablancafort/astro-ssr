import type { ProductCard } from "../types/ProductCard";
import { addToCart } from "../stores/Cart";
import { useState } from "preact/hooks";

export default function ProductCard({ product }: { product: ProductCard }) {

    const [quantity, setQuantity] = useState(1);

    return (                  
        <a href={`/product/${product.id}`} className="relative p-3 pb-6 space-y-2 rounded bg-white border product-card-hover" >

            <div className="text-xs px-1 inline-flex items-center text-orange-400 border border-orange-400 space-x-0.5 rounded-sm">
                <img src="/images/fire-icon-orange.svg" width="13px" height="13px" />
                <span>Flash sale</span>
            </div>

            <button className="absolute top-1 right-3 p-0.5 border rounded hover:bg-gray-100">
                <img src="/images/heart-black-empty-icon.svg" width="16px" height="14px" />
            </button>

            <img className="skeleton" src={product.image} alt={product.title} loading="lazy" />
        
            <h3 className="leading-5 text-lg">{product.title}</h3>

            <div className="flex items-center text-xs">
                <img src="/images/star-icon-yellow.svg" width="14px" height="14px" />
                <img src="/images/star-icon-yellow.svg" width="14px" height="14px" />
                <img src="/images/star-icon-yellow.svg" width="14px" height="14px" />
                <img src="/images/star-icon-yellow.svg" width="14px" height="14px" />
                <img src="/images/star-icon-yellow.svg" width="14px" height="14px" />

                <span className="mx-2">|</span>
                <span>324 reviews</span>
            </div>

            <div className="relative flex space-x-1 py-2">
                <span className="font-semibold text-xl">{product.price}€</span>
                <span className="line-through text-sm text-gray-600">{product.salePrice}€</span>
                <input className="w-10" type="number" min="1" max={product.stock} value={quantity} onChange={(event) => setQuantity(parseInt((event.target as HTMLInputElement).value))} />
                
                <button className="absolute right-2 top-0 p-2 text-white rounded-lg bg-black hover:bg-gray-900" onClick={(event) => {addToCart( product, quantity )}}>
                    <img src="/images/add-to-cart-icon.svg" width="22px" height="22px" />
                </button>
            </div>

            <div className="flex space-x-1 text-sm text-custom-red">
                <img src="/images/clock-icon-red.svg" width="18px" height="18px" />
                <span>Ends: Monday 26, 8:59</span>
            </div>

            <div className="p-3 border rounded">
                <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-orange-400 h-1 rounded-full" style="width: 45%"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                    <p>Left: <span className="font-semibold">23</span></p>
                    <p>Sold: <span className="font-semibold">52</span></p>
                </div>
            </div>

            <div className="flex space-x-1 text-sm text-custom-red">
                <img src="/images/trend-down-icon-red.svg" width="18px" height="18px" />
                <span>Lowest price in 30 days</span>
            </div>

            <ul className="text-sm text-green-600">
                <li>Delivered on Friday 25th</li>
                <li>Elegible for Free Shipping</li>
            </ul>
            
            <div>
                <p className="text-custom-red">Out of Stock</p>
                <p className="text-sm">Expected back in 1 week</p>
            </div>
            
        </a>
    );
};