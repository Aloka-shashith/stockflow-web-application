import React from "react";

import { Button as ShadCNButton } from "../ui/button";

function TopNav() {
  return (
    <div className="flex justify-between items-center h-16 p-4 bg-gray-200 border-b border-b-gray-700">
      <div>StockFlow</div>
      <ShadCNButton>Login</ShadCNButton>
    </div>
  );
}

export default TopNav;
