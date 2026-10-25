import React from "react";
import { useNavigate } from "react-router-dom";

import { Button as ShadCNButton } from "../ui/button";

function TopNav() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center h-16 p-4 bg-gray-200 border-b border-b-gray-700 hover:cursor-pointer">
      <div onClick={() => navigate("/")}>StockFlow</div>
      <ShadCNButton className="hover:cursor-pointer" onClick={() => navigate("/login")}>
        Login
      </ShadCNButton>
    </div>
  );
}

export default TopNav;
