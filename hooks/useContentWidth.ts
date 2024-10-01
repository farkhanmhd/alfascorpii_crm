import { useAtom } from "jotai";
import { contentWidthAtom } from "@/store/theme";

const useContentWidth = () => {
  const [contentWidth, setContentWidth] = useAtom(contentWidthAtom);

  return [contentWidth, setContentWidth as any];
};

export default useContentWidth;
