import { useAtom } from "jotai";
import { menuHiddenAtom } from "@/store/theme";

const useMenuHidden = () => {
  const [ menuHidden, setMenuHidden ] = useAtom(menuHiddenAtom);
  return [menuHidden, setMenuHidden as any];
};

export default useMenuHidden;
