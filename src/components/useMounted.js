import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// false during server render / hydration, true once running in the browser.
// Swiper reads the clock while constructing, so it must only render client-side.
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
