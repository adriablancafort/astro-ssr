import { atom } from "nanostores";
import type { ProductCard } from "../types/ProductCard";

const limit = 5;
let offset = 10;
let autoscroll = 0;
export const showLoadMoreButton = atom(false);

const initialProductCards = await ( await fetch(`https://fakestoreapi.com/products/?limit=${offset}`)).json();
export const productCards = atom<ProductCard[]>(initialProductCards);

export async function loadMoreProducts() {
    if (autoscroll < 5) {
        offset += 10;
        const moreProductCards = await ( await fetch(`https://fakestoreapi.com/products/?limit=${offset}`)).json();
        productCards.set([...productCards.get(), ...moreProductCards]);
        autoscroll++;
    } else {
        showLoadMoreButton.set(true);
    }
}

export function resetProductsAutoscroll() {
    autoscroll = 0;
    showLoadMoreButton.set(false);
}