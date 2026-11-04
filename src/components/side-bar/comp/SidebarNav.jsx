import React from "react";
import { sidebarNav } from "@/data/nav";

function SidebarNav() {
  return (
    <div className="flex flex-col gap-2 p-4">
      {sidebarNav.map((item) => {
        const Icon = item.icon;
        return (
          <button className="flex items-center gap-3 px-4 py-2 w-full rounded-2xl hover:bg-orange-100 hover:cursor-pointer text-foreground transition-colors text-left">
            {Icon && <Icon className="w-5 h-5" />}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SidebarNav;
