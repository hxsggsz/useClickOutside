import { createRef, useEffect } from "react";
// pass the html you're gonna use as a generic on this hook
export function useClickOutsidee<T extends HTMLElement>(
  callback: (ev: Event) => void
) {
  const ref = createRef<T>();
  useEffect(() => {
    function handleOutsideClick(ev: Event) {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        callback(ev);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, ref]);

  return ref;
}
