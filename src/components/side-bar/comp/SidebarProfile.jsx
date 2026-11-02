import { UserRound } from "lucide-react";
// import React from "react";

function SidebarProfile() {
  return (
    <div className="flex items-center mt-auto gap-2 p-2 border-t border-borderalign-items-center justify-center">
      <UserRound className="size-9 bg-orange-300 rounded-2xl stroke-1"/>
      <div className="leading-tight">
        <div className="truncate text-xs font-medium text-foreground">Aloka shashith</div>
        <div className="truncate text-xs text-muted-foreground">Stock Manager</div>
        <div className="truncate text-xs text-muted-foreground">Colombo central Warehouse</div>
      </div>
    </div>
  );
}

export default SidebarProfile;
