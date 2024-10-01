import { useAtom } from "jotai";
import { semiDarkModeAtom } from "@/store/theme";

const useSemiDark = () => {
  const [isSemiDark, setSemiDark] = useAtom(semiDarkModeAtom);

  return [isSemiDark, setSemiDark as any];
};

export default useSemiDark;
