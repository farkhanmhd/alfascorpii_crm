import { useAtom } from "jotai";
import { isRTLAtom } from "@/store/theme";

const useRtl = () => {
  const [isRtl, setRtl] = useAtom(isRTLAtom);

  return [isRtl, setRtl as any];
};

export default useRtl;
