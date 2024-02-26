import { useStore } from "@nanostores/preact";
import { isCookieBannerOpen, closeCookieBanner } from "../stores/Cookies";

export default function CookieBanner() {

    const $isCookieBannerOpen = useStore(isCookieBannerOpen);

    return $isCookieBannerOpen ? (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 p-6 bg-white backdrop-blur-lg bg-opacity-80 rounded border shadow-lg z-10" >
            <img className="pb-4" src="/images/brickoram-logo-dark.svg" alt="Brickoram Logo" width="210px" height="36px" />

            <p>This website uses cookies to ensure you get the best experience.</p>
            <p>For more info, visit our <a className="underline hover:text-gray-600" href="/privacy-policy">privacy policy</a></p>

            <div className="py-4 space-x-2">
                <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="sr-only" />
                    <div className="h-5 w-9 rounded-full bg-custom-red after:absolute after:end-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] cursor-not-allowed" ></div>
                </label>

                <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" checked id="gaCookies" />
                    <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-custom-red peer-checked:after:translate-x-full" > </div>
                </label>
            </div>

            <div className="flex justify-center space-x-4">
                <button className="bg-black hover:bg-gray-900 text-white text-lg rounded px-6" >Manage Settings</button >
                <button onClick={() => closeCookieBanner()} className="bg-custom-red hover:bg-custom-red-hover text-white text-lg rounded px-6" >Accept and close</button >
            </div>
        </div>
    ) : null;
};