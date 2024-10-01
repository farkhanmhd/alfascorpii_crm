import { useAtom } from "jotai";
import { darkModeAtom } from "@/store/theme";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return [darkMode, setDarkMode as any];
};

export default useDarkMode;
