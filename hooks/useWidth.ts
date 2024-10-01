import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { widthAtom, breakPointsAtom } from "@/store/theme";

export default function useWidth() {
  const [width, setWidth] = useAtom(widthAtom);
  const breakpoints = useAtomValue(breakPointsAtom);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Check if window is available (SSR)
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { width, breakpoints };
}
