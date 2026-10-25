import React from "react";

import TopNav from "../components/top-nav/TopNav";

function DefaultLayout({ children }) {
  return (
    <div>
      <TopNav />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
