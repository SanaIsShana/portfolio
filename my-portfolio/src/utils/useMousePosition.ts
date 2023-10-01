import { RefObject, useEffect, useState } from "react";

export const useMousePosition = (ref: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!ref.current) return;
    const mouseMove = ({ clientX, clientY }: MouseEvent) => {
      setMousePosition({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return mousePosition;
};
