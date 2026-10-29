import React from "react";
import { useNavigate } from "react-router-dom";

import { Button as ShadCNButton } from "../ui/button";

function TopNav() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center h-18 p-4 bg-gray-200">
      <ShadCNButton className="hover:cursor-pointer" onClick={() => navigate("/login")}>
        Login
      </ShadCNButton>
    </div>
  );
}

export default TopNav;
