import { useAtom } from "jotai";
import { menuCollapsedAtom } from "@/store/theme";

const useSidebar = () => {
  const [collapsed, setMenuCollapsed] = useAtom(menuCollapsedAtom);

  return [collapsed, setMenuCollapsed as any];
};

export default useSidebar;
