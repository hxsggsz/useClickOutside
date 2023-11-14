import { createRef, useEffect } from "react";
// pass the html you're gonna use as a generic on this hook
export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = createRef<T>();
  useEffect(() => {
    function handleOutsideClick(ev: Event) {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, ref]);

  return ref;
}
