import { useAtom } from "jotai";
import { menuTypeAtom } from "@/store/theme";

export default function useMenuLayout() {
  const [menuType, setMenuType] = useAtom(menuTypeAtom);
  return [ menuType, setMenuType as any];
}