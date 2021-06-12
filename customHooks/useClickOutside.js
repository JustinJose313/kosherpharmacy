import React, { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    if (domNode.current === undefined) return;
    let maybehandler = (e) => {
      if (!domNode.current.contains(e.target)) handler();
    };
    document.addEventListener("mousedown", maybehandler);
    return () => {
      document.removeEventListener("mousedown", maybehandler);
    };
  });
  return domNode;
};
