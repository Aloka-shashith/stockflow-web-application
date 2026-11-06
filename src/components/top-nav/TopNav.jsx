import React from "react";
import { useNavigate } from "react-router-dom";

import { Button as ShadCNButton } from "../ui/button";

function TopNav() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center h-19 p-4 bg-gray-100 border-b-2 border-b-gray-300">
      <ShadCNButton className="hover:cursor-pointer" onClick={() => navigate("/login")}>
        Login
      </ShadCNButton>
    </div>
  );
}

export default TopNav;
