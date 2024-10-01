import { useAtom } from "jotai";
import { menuCollapsedAtom } from "@/store/theme";

const useMenuCollapse = () => {
  const [ menuCollapse, setMenuCollapse ] = useAtom(menuCollapsedAtom);

  return [menuCollapse, setMenuCollapse as any];
};

export default useMenuCollapse;
