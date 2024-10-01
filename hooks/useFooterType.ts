import { useAtom } from "jotai";
import { footerTypeAtom } from "@/store/theme";

const useFooterType = () => {
  const [footerType, setFooterType] = useAtom(footerTypeAtom);
  return [footerType, setFooterType as any];
};

export default useFooterType;
