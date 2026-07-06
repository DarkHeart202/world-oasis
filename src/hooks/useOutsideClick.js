import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleCloseModal(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleCloseModal, listenCapture);

      return () =>
        document.removeEventListener("click", handleCloseModal, listenCapture);
    },
    [handler, listenCapture],
  );

  return ref;
}
