import React from "react";

import { SidebarHeader, SidebarNav, SidebarProfile } from "./comp";

function SideBar() {
  return (
    <div className="flex flex-col w-60 bg-gray-100 border-r-2 border-r-gray-300">
      <SidebarHeader />
      <SidebarNav />
      <SidebarProfile />
    </div>
  );
}

export default SideBar;
