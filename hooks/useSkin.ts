import { useAtom } from "jotai";
import { skinAtom } from "@/store/theme";

const useSkin = (mode: any = "default") => {
  const [skin, setSkin] = useAtom(skinAtom);

  return [skin, setSkin as any];
};

export default useSkin;
