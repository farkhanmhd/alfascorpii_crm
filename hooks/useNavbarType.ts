import { useAtom } from "jotai";
import { navBarTypeAtom } from "@/store/theme";

const useNavbarType = () => {
  const [navbarType, setNavbarType] = useAtom(navBarTypeAtom);
  return [navbarType, setNavbarType as any];
};

export default useNavbarType;
