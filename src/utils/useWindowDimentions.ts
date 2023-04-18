import { useEffect, useState } from "react";

interface WindowDimentions {
  windowWidth: number;
  windowHeight: number;
}

export default function useWindowDimentions() {
  const [windowDimentions, setWindowDimentions] = useState<WindowDimentions>({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimentions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimentions;
}
