import { useAtom } from "jotai";
import { mobileMenuAtom } from "@/store/theme";

const useMobileMenu = () => {
  const [ mobileMenu, setMobileMenu ] = useAtom(mobileMenuAtom);

  return [mobileMenu, setMobileMenu as any];
};

export default useMobileMenu;
