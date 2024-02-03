export default function ProductCard() {
    return (
        <div className="p-3 pb-6 space-y-2 rounded border bg-white" >

            <div className="skeleton w-full h-60"></div>

            <h3>
                <div className="h-4 w-full skeleton rounded mb-1"></div>
                <div className="h-4 w-4/5 skeleton rounded"></div>
            </h3>
            
            <div className="text-gray-100 flex items-center text-xs">
                <img src="/images/star-icon-gray.svg" width="14px" height="14px" />
                <img src="/images/star-icon-gray.svg" width="14px" height="14px" />
                <img src="/images/star-icon-gray.svg" width="14px" height="14px" />
                <img src="/images/star-icon-gray.svg" width="14px" height="14px" />
                <img src="/images/star-icon-gray.svg" width="14px" height="14px" />

                <span className="mx-2">|</span>
                <span className="h-2 w-1/4 skeleton rounded"></span>
            </div>
            
            <div className="relative flex space-x-1 py-4">
                <span className="h-6 w-2/5 skeleton rounded"></span>
                <span className="h-4 w-1/5 skeleton rounded"></span>
                <button className="absolute right-2 top-2 rounded-lg h-10 w-10 skeleton" ></button>
            </div>

            <div className="h-4 w-3/5 skeleton rounded"></div>

            <div className="pb-4">
                <div className="skeleton w-full h-10"></div>
            </div>

            <div className="h-4 w-4/5 skeleton rounded"></div>

            <ul>
                <li className="h-3 w-3/5 skeleton rounded mb-1"></li>
                <li className="h-3 w-3/5 skeleton rounded"></li>
            </ul>

        </div>
    );
};