import React from "react";
import Switch from "@/components/ui/Switch";
import useSidebar from "@/hooks/useSidebar";

const MenuClose = () => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  const handleSwitch = () => {
    setMenuCollapsed(!collapsed)
  };
  return (
    <div className=" flex justify-between">
      <div className="text-slate-600 text-base dark:text-slate-300 font-normal">
        Menu Collapsed
      </div>
      <Switch
        value={collapsed}
        onChange={handleSwitch}
        id="semi_nav_tools2"
      />
    </div>
  );
};

export default MenuClose;
