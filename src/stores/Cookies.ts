import { atom } from "nanostores";
import { setLocalEncript, getLocalEncript } from "./LocalEncript";

export const isCookieBannerOpen = atom(getLocalEncript("isCookieBannerOpen") || true);

export function closeCookieBanner() {
    isCookieBannerOpen.set(false);
    setLocalEncript("isCookieBannerOpen", false);
}

export function openCookieBanner() {
    isCookieBannerOpen.set(true);
    setLocalEncript("isCookieBannerOpen", true);
}