import { useAtom } from "jotai";
import { isMonochromeAtom } from "@/store/theme";
const useMonoChrome = () => {
  const [isMonoChrome, setMonoChrome] = useAtom(isMonochromeAtom);

  return [isMonoChrome, setMonoChrome as any];
};

export default useMonoChrome;
