import React from "react";

import SideBar from "../components/side-bar/SideBar";
import TopNav from "../components/top-nav/TopNav";

function DefaultLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <TopNav />
        <div className="flex-1 p-6 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
