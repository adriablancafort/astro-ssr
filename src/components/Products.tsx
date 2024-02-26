import { useEffect, useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { productCards, loadMoreProducts, showLoadMoreButton, resetProductsAutoscroll } from "../stores/Products";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function Cart() {
    const $productCards = useStore(productCards);
    const $showLoadMoreButton = useStore(showLoadMoreButton);

    const loadMoreProductsRef = useRef(null);

    useEffect(() => {
        if (loadMoreProductsRef.current) {

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreProducts()
                }
            }, { rootMargin: "500px" } );

            observer.observe(loadMoreProductsRef.current);
            return () => observer.disconnect();
        }
    }, [$showLoadMoreButton]);

    return (
        <section>

            <h3 className="py-6 text-4xl">Recommended products</h3>

            <ul className="pt-6 border-t grid sm:grid-cols-5 grid-cols-2 gap-2">
                {$productCards.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>

            <div ref={loadMoreProductsRef}>
                { $showLoadMoreButton ? (
                    <div className="text-center py-12">
                        <button onClick={() => resetProductsAutoscroll()} className="text-white text-lg bg-black hover:bg-gray-900 rounded px-4" >Load More</button>
                    </div>
                ) : (
                    <ul className="pt-2 pb-12 grid sm:grid-cols-5 grid-cols-2 gap-2">
                        {[...Array(5)].map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};