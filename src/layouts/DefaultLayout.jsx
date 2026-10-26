import React from "react";

import SideBar from "../components/side-bar/SideBar";
import TopNav from "../components/top-nav/TopNav";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="flex flex-col flex-1">
        <TopNav />
        <div className="min-h-screen p-6 bg-orange-200 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
